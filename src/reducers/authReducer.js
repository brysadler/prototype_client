import { LOGIN, REGISTER } from "../actions/types"

const initialState = {
  user: {},
  view: 'login',
  valid: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        valid: action.validationError || {}
      }
    case REGISTER:
      return {
        ...state,
        user: action.payload,
        valid: action.validationError || {}
      }
    default:
      return state
  }
}