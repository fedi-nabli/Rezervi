import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_MY_LIST_RESET,
  ORDER_MY_LIST_BY_NEWEST_REQUEST,
  ORDER_MY_LIST_BY_NEWEST_SUCCESS,
  ORDER_MY_LIST_BY_NEWEST_FAIL,
  ORDER_MY_LIST_BY_NEWEST_RESET,
  ORDER_MY_LIST_BY_OLDEST_REQUEST,
  ORDER_MY_LIST_BY_OLDEST_SUCCESS,
  ORDER_MY_LIST_BY_OLDEST_FAIL,
  ORDER_MY_LIST_BY_OLDEST_RESET,
  ORDER_MY_LIST_BY_PRICE_REQUEST,
  ORDER_MY_LIST_BY_PRICE_SUCCESS,
  ORDER_MY_LIST_BY_PRICE_FAIL,
  ORDER_MY_LIST_BY_PRICE_RESET,
  ORDER_MY_LIST_BY_LATEST_REQUEST,
  ORDER_MY_LIST_BY_LATEST_SUCCESS,
  ORDER_MY_LIST_BY_LATEST_FAIL,
  ORDER_MY_LIST_BY_LATEST_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_RESET,
  ORDER_LIST_INCONFIRMED_REQUEST,
  ORDER_LIST_INCONFIRMED_SUCCESS,
  ORDER_LIST_INCONFIRMED_FAIL,
  ORDER_LIST_INCONFIRMED_RESET,
  ORDER_LIST_CONFIRMED_REQUEST,
  ORDER_LIST_CONFIRMED_SUCCESS,
  ORDER_LIST_CONFIRMED_FAIL,
  ORDER_LIST_CONFIRMED_RESET,
  ORDER_LIST_BY_NEWEST_REQUEST,
  ORDER_LIST_BY_NEWEST_SUCCESS,
  ORDER_LIST_BY_NEWEST_FAIL,
  ORDER_LIST_BY_NEWEST_RESET,
  ORDER_LIST_BY_OLDEST_REQUEST,
  ORDER_LIST_BY_OLDEST_SUCCESS,
  ORDER_LIST_BY_OLDEST_FAIL,
  ORDER_LIST_BY_OLDEST_RESET,
  ORDER_LIST_PAID_REQUEST,
  ORDER_LIST_PAID_SUCCESS,
  ORDER_LIST_PAID_FAIL,
  ORDER_LIST_PAID_RESET,
  ORDER_LIST_DELIVERED_REQUEST,
  ORDER_LIST_DELIVERED_SUCCESS,
  ORDER_LIST_DELIVERED_FAIL,
  ORDER_LIST_DELIVERED_RESET,
  ORDER_CONFIRM_REQUEST,
  ORDER_CONFIRM_SUCCESS,
  ORDER_CONFIRM_FAIL,
  ORDER_CONFIRM_RESET,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const orderDetailsReducer = (state = {orderItems: [], shippingAddress: {}}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload
      }
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const orderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELETE_REQUEST:
      return {
        loading: true
      }
    case ORDER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case ORDER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const orderMyListReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_REQUEST:
      return {
        loading: true
      }
    case ORDER_MY_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_MY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_MY_LIST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderMyListByNewestReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_BY_NEWEST_REQUEST:
      return {
        loading: true
      }
    case ORDER_MY_LIST_BY_NEWEST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_MY_LIST_BY_NEWEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_MY_LIST_BY_NEWEST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderMyListByOldestReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_BY_OLDEST_REQUEST:
      return {
        loading: true
      }
    case ORDER_MY_LIST_BY_OLDEST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_MY_LIST_BY_OLDEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_MY_LIST_BY_OLDEST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderMyListByPriceReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_BY_PRICE_REQUEST:
      return {
        loading: true
      }
    case ORDER_MY_LIST_BY_PRICE_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_MY_LIST_BY_PRICE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_MY_LIST_BY_PRICE_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderMyListLatestReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_BY_LATEST_REQUEST:
      return {
        loading: true
      }
    case ORDER_MY_LIST_BY_LATEST_SUCCESS:
      return {
        loading: false,
        orders: action.payload
      }
    case ORDER_MY_LIST_BY_LATEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_MY_LIST_BY_LATEST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListInconfirmedReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_INCONFIRMED_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_INCONFIRMED_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_INCONFIRMED_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_INCONFIRMED_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListConfirmedReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_CONFIRMED_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_CONFIRMED_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_CONFIRMED_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_CONFIRMED_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListByNewestReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_BY_NEWEST_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_BY_NEWEST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_BY_NEWEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_BY_NEWEST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListByOldestReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_BY_OLDEST_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_BY_OLDEST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_BY_OLDEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_BY_OLDEST_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListPaidReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_PAID_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_PAID_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_PAID_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_PAID_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderListDeliveredReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_DELIVERED_REQUEST:
      return {
        loading: true
      }
    case ORDER_LIST_DELIVERED_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        orders: action.payload.orders
      }
    case ORDER_LIST_DELIVERED_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_LIST_DELIVERED_RESET:
      return {
        orders: []
      }
    default:
      return state
  }
}

export const orderConfirmReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CONFIRM_REQUEST:
      return {
        loading: true
      }
    case ORDER_CONFIRM_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case ORDER_CONFIRM_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_CONFIRM_RESET:
      return {}
    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true
      }
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true
      }
    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_DELIVER_RESET:
      return {}
    default:
      return state
  }
}