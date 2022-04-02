import { SET_NAME, SET_PASSWORD } from './actions'

const initialState = {
  name: '',
  password: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload }
    case SET_PASSWORD:
      return { ...state, password: action.payload }

    default:
      return state
  }
}
