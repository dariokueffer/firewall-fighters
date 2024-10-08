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
        user_id: data.user_id
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
      // Mongoose returns [] for .find query with no matches
      const result = await this.model.find({ user_id: { $in: [userId, 'system'] } });

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
}

export default CalendarService;
