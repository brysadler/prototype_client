import { MODAL } from "./types"

export const modalRegister = () => dispatch => {
  dispatch({
    type: MODAL,
    payload: 'register'
  })
}

export const modalProfile = () => dispatch => {
  console.log('modal profile')
  dispatch({
    type: MODAL,
    payload: 'profile'
  })
}

export const modalLink = () => dispatch => {
  console.log('modal link')
  dispatch({
    type: MODAL,
    payload: 'link'
  })
}