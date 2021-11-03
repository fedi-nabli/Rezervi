import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Event from '../models/eventModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    paymentMethod,
    totalPrice
  } = req.body
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    for (const orderItem in orderItems) {
      const qty = orderItem.qty
      const eventId = orderItem.event._id
      const event = await Event.findById(eventId)
      event.countInStock -= qty
      await event.save()
    }
    const order = new Order({
      user: req.user._id,
      orderItems,
      paymentMethod,
      totalPrice
    })

    const createdOrder = await order.save()
    res.status(201)
    res.json(createdOrder)
  }
})

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name, email')
  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

const getMyOrders = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({user: req.user._id})
  const orders = await Order.find({user: req.user._id}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getMyOrdersByNewest = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({user: req.user._id})
  const orders = await Order.find({user: req.user._id}).sort({_id: -1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getMyOrdersByOldest = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({user: req.user._id})
  const orders = await Order.find({user: req.user._id}).sort({_id: 1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getMyOrdersByPrice = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageNumber) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({user: req.user._id})
  const orders = await Order.find({user: req.user._id}).sort({totalPrice: -1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getMyLatestOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.user._id}).sort({_id: -1}).limit(5)
  res.json(orders)
})

const getOrders = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({})
  const orders = await Order.find({}).populate('user', 'id, name').limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getOrdersByNewest = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({})
  const orders = await Order.find({}).populate('user', 'id, name').sort({_id: -1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getOrdersByOldest = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({})
  const orders = await Order.find({}).populate('user', 'id, name').sort({_id: 1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const getOrdersByPrice = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const count = await Order.countDocuments({})
  const orders = await Order.find({}).populate('user', 'id, name').sort({totalPrice: 1}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getMyOrdersByNewest,
  getMyOrdersByOldest,
  getMyOrdersByPrice,
  getMyLatestOrders,
  getOrders,
  getOrdersByNewest,
  getOrdersByOldest,
  getOrdersByPrice
}