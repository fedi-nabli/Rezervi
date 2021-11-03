import express from 'express'
import {protect, admin, supervisor} from '../middleware/authMiddleware.js'
import {
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
} from '../controllers/orderController.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems).get(protect, supervisor, getOrders)
router.route('/newest').get(protect, supervisor, getOrdersByNewest)
router.route('/oldest').get(protect, supervisor, getOrdersByOldest)
router.route('/price').get(protect, supervisor, getOrdersByPrice)
router.route('/myorders').get(protect, getMyOrders)
router.route('/myorders/newest').get(protect, getMyOrdersByNewest)
router.route('/myorders/oldest').get(protect, getMyOrdersByOldest)
router.route('/myorders/price').get(protect, getMyOrdersByPrice)
router.route('/myorders/latest').get(protect, getMyLatestOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').get(protect, updateOrderToPaid)

export default router