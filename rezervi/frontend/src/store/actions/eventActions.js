import axios from 'axios'
import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_LIST_BY_RATING_REQUEST,
  EVENT_LIST_BY_RATING_SUCCESS,
  EVENT_LIST_BY_RATING_FAIL,
  EVENT_LIST_BY_NEWEST_REQUEST,
  EVENT_LIST_BY_NEWEST_SUCCESS,
  EVENT_LIST_BY_NEWEST_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_CREATE_REVIEW_REQUEST,
  EVENT_CREATE_REVIEW_SUCCESS,
  EVENT_CREATE_REVIEW_FAIL,
  EVENT_UPDATE_REVIEW_REQUEST,
  EVENT_UPDATE_REVIEW_SUCCESS,
  EVENT_UPDATE_REVIEW_FAIL,
  EVENT_DELETE_REVIEW_REQUEST,
  EVENT_DELETE_REVIEW_SUCCESS,
  EVENT_DELETE_REVIEW_FAIL,
  EVENT_TOP_REQUEST,
  EVENT_TOP_SUCCESS,
  EVENT_TOP_FAIL,
  EVENT_LATEST_REQUEST,
  EVENT_LATEST_SUCCESS,
  EVENT_LATEST_FAIL,
} from '../constants/eventConstants'

export const listEvents = (keyword = '', filter = '', pageSize = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_LIST_REQUEST
    })
    const {data} = await axios.get(`/api/events?keyword=${keyword}&filter=${filter}&pageSize=${pageSize}&pageNumber=${pageNumber}`)
    dispatch({
      type: EVENT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listEventsByRating = (keyword = '', filter = '', pageSize = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_LIST_BY_RATING_REQUEST
    })
    const {data} = await axios.get(`/api/events/rating?keyword=${keyword}&filter=${filter}&pageSize=${pageSize}&pageNumber=${pageNumber}`)
    dispatch({
      type: EVENT_LIST_BY_RATING_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_LIST_BY_RATING_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listEventsByNewest = (keyword = '', filter = '', pageSize = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_LIST_BY_NEWEST_REQUEST
    })
    const {data} = await axios.get(`/api/events/newest?keyword=${keyword}&filter=${filter}&pageSize=${pageSize}&pageNumber=${pageNumber}`)
    dispatch({
      type: EVENT_LIST_BY_NEWEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_LIST_BY_NEWEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listEventDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_DETAILS_REQUEST
    })
    const {data} = await axios.get(`/api/events/${id}`)
    dispatch({
      type: EVENT_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteEvent = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_DELETE_REQUEST
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
    await axios.delete(`/api/events/${id}`, config)
    dispatch({
      type: EVENT_DELETE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createEvent = (event) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_CREATE_REQUEST
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
    const {data} = await axios.post('/api/events', event, config)
    dispatch({
      type: EVENT_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateEvent = (event) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_UPDATE_REQUEST
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
    const {data} = await axios.put(`/api/events/${event._id}`, event, config)
    dispatch({
      type: EVENT_UPDATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const craeteEventReview = (eventId, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_CREATE_REVIEW_REQUEST
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
    await axios.post(`/api/events/${eventId}/reviews`, review, config)
    dispatch({
      type: EVENT_CREATE_REVIEW_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: EVENT_CREATE_REVIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateEventReview = (eventId, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_UPDATE_REVIEW_REQUEST
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
    await axios.put(`/api/events/${eventId}/reviews`, review, config)
    dispatch({
      type: EVENT_UPDATE_REVIEW_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: EVENT_UPDATE_REVIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteEventReview = (eventId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_DELETE_REVIEW_REQUEST
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
    await axios.delete(`/api/events/${eventId}/reviews`, {}, config)
    dispatch({
      type: EVENT_DELETE_REVIEW_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_REVIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listTopEvents = (keyword = '') => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_TOP_REQUEST
    })
    const {data} = await axios.get(`/api/events/top?keyword=${keyword}`)
    dispatch({
      type: EVENT_TOP_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_TOP_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listLatestEvents = (limit = '') => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_LATEST_REQUEST
    })
    const {data} = await axios.get(`/api/events/latest?limit=${limit}`)
    dispatch({
      type: EVENT_LATEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EVENT_LATEST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}