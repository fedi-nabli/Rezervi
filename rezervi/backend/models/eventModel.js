import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  dates: [
    {
      type: Date,
      required: true,
    }
  ],
  times: [
    {
      type: Date,
      required: true
    }
  ],
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

export default Event