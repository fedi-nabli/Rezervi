import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer
} from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  eventListReducer,
  eventListByRatingReducer,
  eventListByNewestReducer,
  eventDetailsReducer,
  eventDeleteReducer,
  eventCreateReducer,
  eventUpdateReducer,
  eventCreateReviewReducer,
  eventUpdateReviewReducer,
  eventDeleteReviewReducer,
  eventTopRatedReducer,
  eventLatestReducer
} from './reducers/eventReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderDeleteReducer,
  orderMyListReducer,
  orderMyListByNewestReducer,
  orderMyListByOldestReducer,
  orderMyListByPriceReducer,
  orderMyListLatestReducer,
  orderListReducer,
  orderListInconfirmedReducer,
  orderListConfirmedReducer,
  orderListByNewestReducer,
  orderListByOldestReducer,
  orderListPaidReducer,
  orderListDeliveredReducer,
  orderConfirmReducer,
  orderPayReducer,
  orderDeliverReducer
} from './reducers/orderReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  cart: cartReducer,
  eventList: eventListReducer,
  eventListByRating: eventListByRatingReducer,
  eventListByNewest: eventListByNewestReducer,
  eventDetails: eventDetailsReducer,
  eventDelete: eventDeleteReducer,
  eventCreate: eventCreateReducer,
  eventUpdate: eventUpdateReducer,
  eventCreateReview: eventCreateReviewReducer,
  eventUpdateReview: eventUpdateReviewReducer,
  eventDeleteReview: eventDeleteReviewReducer,
  eventTopRated: eventTopRatedReducer,
  eventLatest: eventLatestReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderDelete: orderDeleteReducer,
  orderMyList: orderMyListReducer,
  orderMyListByNewest: orderMyListByNewestReducer,
  orderMyListByOldest: orderMyListByOldestReducer,
  orderMyListByPrice: orderMyListByPriceReducer,
  orderMyListLatest: orderMyListLatestReducer,
  orderList: orderListReducer,
  orderListInconfirmed: orderListInconfirmedReducer,
  orderListConfirmed: orderListConfirmedReducer,
  orderListByNewest: orderListByNewestReducer,
  orderListByOldest: orderListByOldestReducer,
  orderListPaid: orderListPaidReducer,
  orderListDeliveredReducer: orderListDeliveredReducer,
  orderConfirm: orderConfirmReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: {
    userInfo: userInfoFromStorage
  }
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store