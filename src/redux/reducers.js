import {
  SET_NAME,
  SET_PASSWORD,
  SET_CAR_NUMBER,
  SET_VIOLATION_ARTICLE,
  SET_VIOLATION_ADDRESS,
} from './actions'

const initialUserState = {
  name: '',
  password: '',
}

const initialViolationState = {
  carNumber: '',
  violationArticle: {
    title: '',
    price: 0,
    payParking: false,
  },
  violationAddress: '',
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload }
    case SET_PASSWORD:
      return { ...state, password: action.payload }

    default:
      return state
  }
}

export const violationReducer = (state = initialViolationState, action) => {
  switch (action.type) {
    case SET_CAR_NUMBER:
      return { ...state, carNumber: action.payload }

    case SET_VIOLATION_ARTICLE:
      return { ...state, violationArticle: action.payload }

    case SET_VIOLATION_ADDRESS:
      return { ...state, violationAddress: action.payload }

    default:
      return state
  }
}
