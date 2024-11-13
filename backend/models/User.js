import mongoose from 'mongoose';
const bcrypt = require('bcryptjs');
import Calendar from './Calendar';
import { DuplicateKeyError } from '../utils/databaseErrors';
import { userColors, systemColors } from 'config/appConfig';

const SALT_WORK_FACTOR = 10;

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Enter a username.'],
    minLength: [4, 'Username should be at least four characters'],
    unique: [true, 'That username is taken.']
  },
  password: {
    type: String,
    required: [true, 'Enter a password.'],
    minLength: [8, 'Password should be at least four characters']
  },
  failedLoginAttempts: {
    type: Number,
    default: 0
  },
  lastFailedLoginAttempt: {
    type: Date,
    default: null
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }
  ],
  calendarSettings: [
    {
      calendar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Calendar'
      },
      userDefault: {
        type: Boolean,
        required: true,
        default: false
      },
      visibility: {
        type: Boolean,
        required: true,
        default: true
      },
      color: {
        type: String,
        required: true
      },
      isShared: {
        type: Boolean,
        required: true,
        default: false
      },
    }
  ],
  notifications: [
    {
      type: {
        type: String, // e.g., 'info', 'warning', 'error'
        required: true
      },
      message: {
        type: String,
        required: true
      },
      read: {
        type: Boolean,
        default: false
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

// preserving isNew state for 'post' middleware
schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});

// schema middleware to apply before saving
schema.pre('save', async function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);

    return next();
  } catch (e) {
    return next(e);
  }
});

// schema middleware to check for duplicate keys
const handleE11000 = (error, res, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    throw new DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
      errorCode: 'username'
    });
  } else {
    return next();
  }
};

schema.post('save', handleE11000);

// for new users: embed system cal settings and create user default calendar
schema.post('save', async function () {
  if (this.id && this.wasNew) {
    try {
      // Lookup system cals
      const systemCals = await Calendar.find({
        user_id: 'system'
      });

      if (systemCals.length > 0) {
        const settings = [];

        systemCals.forEach((cal, idx) => {
          settings.push({
            calendar: cal.id,
            userDefault: false,
            visibility: true,
            color: `#${systemColors[idx]}`
          });
        });

        settings.forEach((entry) => {
          this.calendarSettings.push(entry);
        });

        // embed calendar settings in user doc
        await this.save();
      }

      // check for existing user default cal
      const defaultCal = await Calendar.findOne({
        name: this.username,
        user_id: this.id
      });

      if (defaultCal) {
        throw new DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
          errorCode: 'user'
        });
      }

      const newDefaultCal = new Calendar({
        name: this.username,
        user_id: this.id
      });

      // Create default calendar
      await newDefaultCal.save();
    } catch (e) {
      throw new Error(e);
    }
  }
});

schema.statics.findByUsername = async function (username) {
  // Mongoose returns null for .findOne query with no matches
  return this.findOne({ username });
};

schema.methods.validatePassword = async function validatePassword(candidatePassword) {
  const isValid = await bcrypt.compare(candidatePassword, this.password); // Await the bcrypt comparison

  if (!isValid) {
    this.failedLoginAttempts += 1;
    this.lastFailedLoginAttempt = new Date();
    await this.save();
  } else {
    this.failedLoginAttempts = 0;
    this.lastFailedLoginAttempt = null;
    await this.save();
  }

  return isValid;
};

schema.methods.validateLockout = function validateLockout() {
  const lockoutTime = new Date(this.lastFailedLoginAttempt);
  lockoutTime.setMinutes(lockoutTime.getMinutes() + 15);

  return this.failedLoginAttempts >= 5 && new Date() < lockoutTime;
}


const User = mongoose.model('User', schema);

export default User;
