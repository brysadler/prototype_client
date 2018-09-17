import { MODAL } from "../actions/types"

const initialState = {
  currentView: 'login'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL:
      console.log(action.payload)
      return {
        ...state,
        currentView: action.payload
      }
    default:
      return state
  }
}