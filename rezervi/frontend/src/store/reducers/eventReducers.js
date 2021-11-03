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
  EVENT_CREATE_RESET,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_UPDATE_RESET,
  EVENT_CREATE_REVIEW_REQUEST,
  EVENT_CREATE_REVIEW_SUCCESS,
  EVENT_CREATE_REVIEW_FAIL,
  EVENT_CREATE_REVIEW_RESET,
  EVENT_UPDATE_REVIEW_REQUEST,
  EVENT_UPDATE_REVIEW_SUCCESS,
  EVENT_UPDATE_REVIEW_FAIL,
  EVENT_UPDATE_REVIEW_RESET,
  EVENT_DELETE_REVIEW_REQUEST,
  EVENT_DELETE_REVIEW_SUCCESS,
  EVENT_DELETE_REVIEW_FAIL,
  EVENT_TOP_REQUEST,
  EVENT_TOP_SUCCESS,
  EVENT_TOP_FAIL,
  EVENT_LATEST_REQUEST,
  EVENT_LATEST_SUCCESS,
  EVENT_LATEST_FAIL
} from '../constants/eventConstants'

export const EventListReducer = (state = {events: []}, action) => {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return {
        loading: true,
        events: []
      }
    case EVENT_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        events: action.payload.events
      }
    case EVENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventListByRatingReducer = (state = {events: []}, action) => {
  switch (action.type) {
    case EVENT_LIST_BY_RATING_REQUEST:
      return {
        loading: true,
        events: []
      }
    case EVENT_LIST_BY_RATING_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        events: action.payload.events
      }
    case EVENT_LIST_BY_RATING_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventListByNewestReducer = (state = {events: []}, action) => {
  switch (action.type) {
    case EVENT_LIST_BY_NEWEST_REQUEST:
      return {
        loading: true,
        events: []
      }
    case EVENT_LIST_BY_NEWEST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        EVENTs: action.payload.events
      }
    case EVENT_LIST_BY_NEWEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventDetailsReducer = (state = {event: {reviews: []}}, action) => {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case EVENT_DETAILS_SUCCESS:
      return {
        loading: false,
        event: action.payload
      }
    case EVENT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_DELETE_REQUEST:
      return {
        loading: true
      }
    case EVENT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case EVENT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_CREATE_REQUEST:
      return {
        loading: true
      }
    case EVENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        event: action.payload
      }
    case EVENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case EVENT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const EventUpdateReducer = (state = {event: {}}, action) => {
  switch (action.type) {
    case EVENT_UPDATE_REQUEST:
      return {
        loading: true
      }
    case EVENT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        event: action.payload
      }
    case EVENT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case EVENT_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export const EvetCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_CREATE_REVIEW_REQUEST:
      return {
        loading: true
      }
    case EVENT_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case EVENT_CREATE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case EVENT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const EventUpdateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_UPDATE_REVIEW_REQUEST:
      return {
        loading: true
      }
    case EVENT_UPDATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case EVENT_UPDATE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case EVENT_UPDATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const EventDeleteReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_DELETE_REVIEW_REQUEST:
      return {
        loading: true
      }
    case EVENT_DELETE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case EVENT_DELETE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventTopRatedReducer = (state = {EVENTs: []}, action) => {
  switch (action.type) {
    case EVENT_TOP_REQUEST:
      return {
        loading: true,
        EVENTs: []
      }
    case EVENT_TOP_SUCCESS:
      return {
        loading: false,
        EVENTs: action.payload
      }
    case EVENT_TOP_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const EventLatestReducer = (state = {events: []}, action) => {
  switch (action.type) {
    case EVENT_LATEST_REQUEST:
      return {
        loading: true,
        events: []
      }
    case EVENT_LATEST_SUCCESS:
      return {
        loading: false,
        events: action.payload
      }
    case EVENT_LATEST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}