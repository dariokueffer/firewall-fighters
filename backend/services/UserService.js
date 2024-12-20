import jwt from 'jsonwebtoken';
import RefreshTokenService from './RefreshTokenService';
import RoleService from './RoleService';
import { AuthorizationError, NotFoundError } from '../utils/userFacingErrors';
import HttpResponse from '../utils/httpResponse';

class UserService {
  constructor(model, refreshTokenModel, roleModel) {
    this.model = model;
    this.refreshTokenService = new RefreshTokenService(refreshTokenModel);
    this.roleService = new RoleService(roleModel);
  }

  create = async (data) => {
    try {
      const result = await this.model.create(data);

      return result;
    } catch (e) {
      throw e;
    }
  };

  // Look up user, validate pw, create refresh token
  login = async (username, password) => {
    try {
      // Mongoose returns null for .findOne query with no matches
      const user = await this.model.findOne({ username });

      if (!user) {
        // User not found
        throw new NotFoundError('Invalid username', { errorCode: 'username' });
      }

      const isLockedOut = user.validateLockout();

      if (isLockedOut) {
        throw new AuthorizationError('Account is locked out. Please try again later.', { errorCode: 'lockout' });
      }


      // process login
      const validated = await user.validatePassword(password);

      if (!validated) {
        throw new AuthorizationError('Invalid password', {
          errorCode: 'password'
        });
      }

      // If password is valid, create JWT token
      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: Number(process.env.JWT_EXPIRATION)
      });

      // Create refresh token
      const refreshToken = await this.refreshTokenService.create(user.id);

      const refreshTokenResponse = new HttpResponse(refreshToken);

      return {
        accessToken,
        refreshToken: refreshTokenResponse.data
      };
    } catch (e) {
      throw e;
    }
  };

  getOne = async (userId) => {
    // Retrieve user doc and populate referenced fields
    // Mongoose returns null for .findById query with no matches
    const response = await this.model.findById(userId).populate(['roles', 'calendarSettings.calendar']);

    const httpResponse = new HttpResponse(response);

    const flattenedCalendarSettings = httpResponse.data.calendarSettings.map((entry) => ({
      id: entry.calendar.id,
      name: entry.calendar.name,
      user_id: entry.calendar.user_id,
      userDefault: entry.userDefault,
      visibility: entry.visibility,
      color: entry.color,
      isShared: entry.isShared,
      sharedWith: entry.calendar.sharedWith
    }));

    httpResponse.data.calendarSettings = flattenedCalendarSettings;

    return httpResponse.data;
  };


  getAllUsernames = async (userId) => {
    try {
      // Retrieve only `username` and `_id` fields for all users
      const users = await this.model.find({ _id: { $ne: userId } }, 'username _id');


      // Wrap in an HttpResponse
      return new HttpResponse(users);
    } catch (e) {
      throw e;
    }
  };

  refreshToken = async (requestToken) => {
    try {
      const refreshToken = await this.refreshTokenService.get(requestToken);

      if (!refreshToken) {
        // Refresh token not found
        throw new NotFoundError('Invalid request token', { errorCode: 'refreshToken' });
      }

      // Throws error on expired refresh token
      await this.refreshTokenService.verify(refreshToken);

      // create new JWT token
      const accessToken = jwt.sign({ id: refreshToken.user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: Number(process.env.JWT_EXPIRATION)
      });

      const response = {
        accessToken
      };

      return new HttpResponse(response);
    } catch (e) {
      throw e;
    }
  };

  assignRoles = async (user, roleNames) => {
    try {
      const roles = await this.roleService.get(roleNames);

      if (!roles.data || roles.data.length < 1) {
        throw new NotFoundError('Role(s) not found', { errorCode: 'role' });
      }

      user.roles = roles.data.map((role) => role.id);

      return await user.save();
    } catch (e) {
      throw e;
    }
  };

  update = async (userId, data) => {
    try {
      // Mongoose returns the modified document (or null) for .findById query
      const user = await this.model.findById(userId);

      if (!user) {
        throw new NotFoundError('No matching user found');
      }

      // update password
      if (data.password) {
        const validated = await user.validatePassword(data.password);

        if (!validated) {
          throw new AuthorizationError('Invalid password. Please try again.', { errorCode: 'password' });
        }

        user.password = data.newPassword || '';
      }

      // update username
      if (data.username) {
        user.username = data.username;
      }

      const result = await user.save();

      return new HttpResponse(result);
    } catch (e) {
      throw e;
    }
  };

  updateCalendarSettings = async (userId, data) => {
    try {
      // get calendar settings properties from model schema
      const calendarSettingsKeys = Object.keys(this.model.schema.tree.calendarSettings[0]);

      const diffedData = {};

      calendarSettingsKeys.forEach((key) => {
        diffedData[key] = data[key];
      });

      Object.keys(diffedData).forEach((key) => {
        if (diffedData[key] === undefined) {
          delete diffedData[key];
        }
      });

      const update = {};

      Object.keys(diffedData).forEach((key) => {
        update[`calendarSettings.$[i].${key}`] = diffedData[key];
      });


      const user = await this.model.findOneAndUpdate(
        { _id: userId },
        { $set: update },
        { arrayFilters: [{ 'i.calendar': data.id }], new: true }
      );

      if (!user) {
        throw new NotFoundError(`Update failed with user id: ${userId}`);
      }

      const httpResponse = new HttpResponse(user.calendarSettings);

      const flattenedCalendarSettings = httpResponse.data.map((entry) => ({
        id: entry.calendar,
        userDefault: entry.userDefault,
        visibility: entry.visibility,
        color: entry.color
      }));

      httpResponse.data = flattenedCalendarSettings;

      return httpResponse;
    } catch (e) {
      throw e;
    }
  };

  updateSharedCalendarSettings = async (userId, calendarId, userDefault, visibility, color, isShared) => {
    try {
      const user = await this.model.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Create the new calendar setting to add to the user's calendarSettings
      const newCalendarSetting = {
        calendar: calendarId,
        userDefault,
        visibility,
        color,
        isShared: true
      };

      // Check if the calendar already exists in the user's settings
      const existingCalendar = user.calendarSettings.find(
        (entry) => entry.calendar === calendarId
      );

      if (!existingCalendar) {
        user.calendarSettings.push(newCalendarSetting);

        user.notifications.push({
          type: 'info',
          message: `A new shared calendar has been added.`,
          read: false,
          timestamp: new Date()
        });


        await user.save();
      }

      return user;
    } catch (e) {
      throw e;
    }
  };
}

export default UserService;
