import asyncHandler from 'express-async-handler'
import Event from '../models/eventModel.js'

const getEvents = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const filter = req.query.filter ? {
    category: {
      $regex: req.query.filter,
      $options: 'i'
    }
  } : {}

  const region = req.query.region ? {
    country: {
      $regex: req.query.region,
      $options: 'i'
    }
  } : {}

  const count = await Event.countDocuments({...keyword, ...filter, ...region})
  const events = await Event.find({...keyword, ...filter, ...region}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    events,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getEventsByRating = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const filter = req.query.filter ? {
    category: {
      $regex: req.query.filter,
      $options: 'i'
    }
  } : {}

  const region = req.query.region ? {
    country: {
      $regex: req.query.region,
      $options: 'i'
    }
  } : {}

  const count = await Event.countDocuments({...keyword, ...filter, ...region})
  const events = await Event.find({...keyword, ...filter, ...region}).sort({rating: -1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    events,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getEventsByOldest = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } :  {}

  const filter = req.query.filter ? {
    category: {
      $regex: req.query.filter,
      $options: 'i'
    }
  } :  {}

  const region = req.query.region ? {
    country: {
      $regex: req.query.region,
      $options: 'i'
    }
  } : {}

  const count = await Event.countDocuments({...keyword, ...filter, ...region})
  const events = await Event.find({...keyword, ...filter, ...region}).sort({_id: 1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    events,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getEventsByNewest = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } :  {}

  const filter = req.query.filter ? {
    category: {
      $regex: req.query.filter,
      $options: 'i'
    }
  } :  {}

  const region = req.query.region ? {
    country: {
      $regex: req.query.region,
      $options: 'i'
    }
  } : {}

  const count = await Event.countDocuments({...keyword, ...filter, ...region})
  const events = await Event.find({...keyword, ...filter, ...region}).sort({_id: -1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    events,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id)
  if (event) {
    res.json(event)
  } else {
    res.status(404)
    throw new Error('Event not found')
  }
})

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id)
  if (event) {
    await event.remove()
    res.json({
      message: 'Event removed'
    })
  } else {
    res.status(404)
    throw new Error('Event not found')
  }
})

const createEvent = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    host,
    time,
    description,
    category,
    place,
    country,
    price,
    countInStock
  } = req.body

  const event = new Event({
    name,
    image,
    host,
    time,
    description,
    category,
    place,
    country,
    price,
    countInStock
  })
  const createdEvent = await event.save()
  res.status(201).json(createdEvent)
})

const updateEvent = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    host,
    time,
    description,
    category,
    place,
    country,
    price,
    countInStock
  } = req.body

  const event = await Event.findById(req.params.id)
  if (event) {
    event.name = name
    event.image = image
    event.host = host
    event.time = time
    event.description = description
    event.category = category
    event.place = place
    event.country = country
    event.price = price
    event.countInStock = countInStock

    const updatedEvent = await event.save()
    res.json(updatedEvent)
  } else {
    res.status(404)
    throw new Error('Event not found')
  }
})

const createEventReview = asyncHandler(async (req, res) => {
  const {
    rating,
    comment
  } = req.body

  const event = await Event.findById(req.params.id)
  if (event) {
    const alreadyReviewed = event.reviews.find(r => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Event already reviewed')
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      date: Date.now(),
      user: req.user._id
    }
    event.reviews.push(review)
    event.numReviews = event.reviews.length
    event.rating = event.reviews.reduce((acc, item) => item.rating + acc, 0) / event.reviews.length
    await event.save()
    res.status(201).json({
      message: 'Review added'
    })
  } else {
    res.status(404)
    throw new Error('Event not found')
  }
})

const updateEventReview = asyncHandler(async (req, res) => {
  const {
    rating,
    comment
  } = req.body

  const event = await Event.findById(req.params.id)
  if (event) {
    const review = event.reviews.find(r => r.user.toString() === req.user._id.toString())
    if (review) {
      review.rating = Number(rating)
      review.comment = comment
      event.rating = event.reviews.reduce((acc, item) => item.rating + acc, 0) / event.reviews.length
      await event.save()
      res.status(201)
      res.json({
        message: 'Review updated'
      })
    } else {
      res.status(404)
      throw new Error('Review not found, maybe you deleted it!')
    }
  } else {
    res.status(404)
    throw new Error('Event not found')
  }
})

const deleteEventReview = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id)
  if (event) {
    const review = event.reviews.find(r => r.user.toString() === req.user._id.toString())
    if (review) {
      event.review.pull({_id: review._id})
      event.numReviews = event.reviews.length
      if (event.numReviews === 0) {
        event.rating = 0
      } else {
        event.rating = event.reviews.reduce((acc, item) => item.rating + acc, 0) / event.reviews.length
      }
      await event.save()
      res.status(201)
      res.json({
        message: 'Review deleted'
      })
    } else {
      res.status(404)
      throw new Error('Review not found')
    }
  } else {
    res.status(404)
    throw new Error('Event not found')
  }
})

const getNewestEvents = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 4

  const keyword = req.query.keyword ? {
    category: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const events = await Event.find({...keyword}).sort({_id: -1}).limit(limit)
  res.json(events)
})

const getTopEvents = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 4

  const keyword = req.query.keyword ? {
    category: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const events = await Event.find({...keyword}).sort({rating: -1}).limit(limit)
  res.json(events)
})

export {
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
}