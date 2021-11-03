import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
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

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/newest').get(protect, admin, getOrdersByNewest)
router.route('/oldest').get(protect, admin, getOrdersByOldest)
router.route('/price').get(protect, admin, getOrdersByPrice)
router.route('/myorders').get(protect, getMyOrders)
router.route('/myorders/newest').get(protect, getMyOrdersByNewest)
router.route('/myorders/oldest').get(protect, getMyOrdersByOldest)
router.route('/myorders/price').get(protect, getMyOrdersByPrice)
router.route('/myorders/latest').get(protect, getMyLatestOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').get(protect, updateOrderToPaid)

export default router