import db from 'models';
import RoleService from 'services/RoleService';
import CalendarService from 'services/CalendarService';

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const mongoose = db.mongoose;
const Role = db.Role;
const Calendar = db.Calendar;

const roleService = new RoleService(Role);
const calendarService = new CalendarService(Calendar);

const initializeRoles = async () => {
  const count = await Role.countDocuments({});
  if (count === 0) {
    await roleService.create('user');
    await roleService.create('moderator');
    await roleService.create('admin');
    console.log('Initialized roles.');
  }
};

const initializeCalendars = async () => {
  const count = await Calendar.countDocuments({ user_id: 'system', name: 'US Holidays' });
  if (count === 0) {
    const data = {
      name: 'US Holidays',
      user_id: 'system'
    };

    await calendarService.create(data);
    console.log('Created US Holidays calendar.');
  }
};

mongoose
  .connect(MONGO_URL)
  .then(async () => {
    console.log('Connected to MongoDB');

    // Initialize roles
    await initializeRoles();

    // Initialize system calendars
    await initializeCalendars();
  })
  .catch((e) => {
    console.error('Connection error', e);
    process.exit();
  });

export default db;
