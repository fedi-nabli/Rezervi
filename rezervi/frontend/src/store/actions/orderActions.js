import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_CONFIRM_REQUEST,
  ORDER_CONFIRM_SUCCESS,
  ORDER_CONFIRM_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_MY_LIST_BY_NEWEST_REQUEST,
  ORDER_MY_LIST_BY_NEWEST_SUCCESS,
  ORDER_MY_LIST_BY_NEWEST_FAIL,
  ORDER_MY_LIST_BY_OLDEST_REQUEST,
  ORDER_MY_LIST_BY_OLDEST_SUCCESS,
  ORDER_MY_LIST_BY_OLDEST_FAIL,
  ORDER_MY_LIST_BY_PRICE_REQUEST,
  ORDER_MY_LIST_BY_PRICE_SUCCESS,
  ORDER_MY_LIST_BY_PRICE_FAIL,
  ORDER_LIST_CONFIRMED_REQUEST,
  ORDER_LIST_CONFIRMED_SUCCESS,
  ORDER_LIST_CONFIRMED_FAIL,
  ORDER_LIST_INCONFIRMED_REQUEST,
  ORDER_LIST_INCONFIRMED_SUCCESS,
  ORDER_LIST_INCONFIRMED_FAIL,
  ORDER_LIST_BY_NEWEST_REQUEST,
  ORDER_LIST_BY_NEWEST_SUCCESS,
  ORDER_LIST_BY_NEWEST_FAIL,
  ORDER_LIST_BY_OLDEST_REQUEST,
  ORDER_LIST_BY_OLDEST_SUCCESS,
  ORDER_LIST_BY_OLDEST_FAIL,
  ORDER_LIST_PAID_REQUEST,
  ORDER_LIST_PAID_SUCCESS,
  ORDER_LIST_PAID_FAIL,
  ORDER_LIST_DELIVERED_REQUEST,
  ORDER_LIST_DELIVERED_SUCCESS,
  ORDER_LIST_DELIVERED_FAIL,
  ORDER_MY_LIST_BY_LATEST_REQUEST,
  ORDER_MY_LIST_BY_LATEST_SUCCESS,
  ORDER_MY_LIST_BY_LATEST_FAIL
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.post('/api/orders', order, config)
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get(`/api/orders/${id}`, config)
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELETE_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    await axios.delete('/api/orders', order, config)
    dispatch({
      type: ORDER_DELETE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: ORDER_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const confirmOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CONFIRM_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.put(`/api/orders/${orderId}/confirm`, {}, config)
    dispatch({
      type: ORDER_CONFIRM_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_CONFIRM_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const payOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_PAY_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.put(`/api/orders/${orderId}/pay`, {}, config)
    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELIVER_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)
    dispatch({
      type: ORDER_DELIVER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_MY_LIST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/myorders', config)
    dispatch({
      type: ORDER_MY_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listMyOrdersByNewest = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_MY_LIST_BY_NEWEST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/myorders/newest', config)
    dispatch({
      type: ORDER_MY_LIST_BY_NEWEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_BY_NEWEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listMyOrdersByOldest = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_MY_LIST_BY_OLDEST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/myorders/oldest', config)
    dispatch({
      type: ORDER_MY_LIST_BY_OLDEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_BY_OLDEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listMyOrdersByPrice = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_MY_LIST_BY_PRICE_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/myorders/price', config)
    dispatch({
      type: ORDER_MY_LIST_BY_PRICE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_BY_PRICE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listMyLatestOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_MY_LIST_BY_LATEST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/myorders/latest', config)
    dispatch({
      type: ORDER_MY_LIST_BY_LATEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_BY_LATEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders', config)
    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listConfrimedOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_CONFIRMED_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/confirmed', config)
    dispatch({
      type: ORDER_LIST_CONFIRMED_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_CONFIRMED_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listInconfrimedOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_INCONFIRMED_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/inconfirmed', config)
    dispatch({
      type: ORDER_LIST_INCONFIRMED_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_INCONFIRMED_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listNewestOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_BY_NEWEST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/newest', config)
    dispatch({
      type: ORDER_LIST_BY_NEWEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_BY_NEWEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listOldestOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_BY_OLDEST_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/oldest', config)
    dispatch({
      type: ORDER_LIST_BY_OLDEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_BY_OLDEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listPaidOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_PAID_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/paid', config)
    dispatch({
      type: ORDER_LIST_PAID_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_PAID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listDeliveredOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_DELIVERED_REQUEST
    })
    const {
      userLogin: {
        userInfo
      }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.get('/api/orders/delivered', config)
    dispatch({
      type: ORDER_LIST_DELIVERED_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_DELIVERED_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}