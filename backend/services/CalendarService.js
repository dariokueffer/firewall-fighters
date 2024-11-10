import HttpResponse from '../utils/httpResponse';
import { systemColors, userColors } from 'config/appConfig';

class CalendarService {
  constructor(model) {
    this.model = model;
  }

  create = async (data) => {
    try {
      const _obj = {
        name: data.name,
        user_id: data.user_id,
        shared_with: data.shared_with
      };

      return await this.model.create(_obj);
    } catch (e) {
      throw e;
    }
  };

  getOne = async (calendarId) => {
    try {
      // Mongoose returns null for .findById query with no matches
      const result = await this.model.findById(calendarId);

      return new HttpResponse(result);
    } catch (e) {
      throw e;
    }
  };

  // Get user and system calendars
  getUserCalendars = async (userId) => {
    try {
      const result = await this.model.find({
        $or: [
          { user_id: { $in: [userId, 'system'] } },
          { shared_with: userId }
        ]
      });
      return new HttpResponse(result);
    } catch (e) {
      throw e;
    }
  };

  update = async (calendarId, data) => {
    try {
      const update = {
        name: data.name
      };

      // Mongoose returns the modified document (or null) for .findByIdAndUpdate query with option 'new: true'
      const result = await this.model.findByIdAndUpdate(calendarId, update, { new: true });

      return new HttpResponse(result);
    } catch (e) {
      throw e;
    }
  };

  delete = async (calendarId) => {
    try {
      // Mongoose returns the matching document (or null) for .findByIdAndDelete query
      const result = await this.model.findByIdAndDelete(calendarId);

      if (!result) {
        const error = new Error('Calendar not found');

        error.statusCode = 404;
        throw error;
      } else {
        return new HttpResponse(result, { deleted: true });
      }
    } catch (e) {
      throw e;
    }
  };

  shareCalendar = async (calendarId, userId) => {
    try {

      // Find the calendar
      const calendar = await this.model.findById(calendarId);
      if (!calendar) {
        throw new Error('Calendar not found');
      }

      // Add the user to the shared_with array
      if (!calendar.shared_with.includes(userId)) {
        calendar.shared_with.push(userId);
        await calendar.save();
      }

      return calendar;
    } catch (e) {
      throw e;
    }
  };
}

export default CalendarService;
