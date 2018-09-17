import { combineReducers } from 'redux'
import authReducer from './authReducer'
import viewReducer from "./viewReducer"

export default combineReducers({
  auth: authReducer,
  view: viewReducer
})