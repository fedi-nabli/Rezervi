import express from 'express'
import {protect, supervisor, admin} from '../middleware/authMiddleware.js'
import {
  getEvents,
  getEventsByRating,
  getEventsByOldest,
  getEventsByNewest,
  getEventById,
  deleteEvent,
  createEvent,
  updateEvent,
  createEventReview,
  updateEventReview,
  deleteEventReview,
  getNewestEvents,
  getTopEvents
} from '../controllers/eventController.js'
const router = express.Router()

router.route('/').get(getEvents).post(protect, supervisor, createEvent)
router.get('/rating', getEventsByRating)
router.get('/oldest', getEventsByOldest)
router.get('/newest', getEventsByNewest)
router.get('/new', getNewestEvents)
router.get('/top', getTopEvents)
router.route('/:id/reviews').post(protect, createEventReview).delete(protect, deleteEventReview).put(protect, updateEventReview)
router.route('/:id').get(getEventById).delete(protect, admin, deleteEvent).put(protect, supervisor, updateEvent)

export default router