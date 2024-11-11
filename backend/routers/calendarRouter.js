import express from 'express';
import { authJwt } from '../middleware';
import CalendarController from '../controllers/CalendarController';

const router = express.Router();

// POST request to create calendar
router.post('/', [authJwt.verifyToken], CalendarController.create);

// PUT request to update calendar
router.put('/:calendarId', [authJwt.verifyToken, authJwt.verifyURIAuth], CalendarController.update);

//router.get('/:userId', CalendarController.getUserCalendars);

// DELETE request to delete calendar
router.delete('/:calendarId', [authJwt.verifyToken, authJwt.verifyURIAuth], CalendarController.delete);

// PUT request to update calendar settings
router.put('/:calendarId/settings', [authJwt.verifyToken, authJwt.verifyURIAuth], CalendarController.updateSettings);

router.post('/:calendarId/share', CalendarController.shareCalendar);


export default router;
