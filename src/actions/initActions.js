import { LOGIN, REGISTER } from "./types"
import { validateLogin, validateRegistration } from "../utils"
import { modalProfile } from './viewActions'


export const loginUser = (creds) => dispatch => {
  const valid = validateLogin(creds)
  if (valid.isValidated) {
    // TODO run backend to enable this jawn
    // fetch('localhost:4040/login', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(creds)
    // })
    //   .then((response) =>  response.json())
    //   .then((userData) => dispatch({
    //     type: LOGIN,
    //     payload: userData
    //   }))
    dispatch({
      type: LOGIN,
      payload: { name: 'Bryan', dob: '10/21/1991', email: 'brysadler@gmail.com' }
    })
  } else {
    dispatch({
      type: LOGIN,
      validationError: valid
    })
  }
}

export const registerUser = (userInfo) => dispatch => {
  console.log('register user')
  const valid = validateRegistration(userInfo)
  if (valid.isValidated) {
    // TODO run backend to enable this jawn
    // fetch('localhost:4040/registerUser', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(userInfo)
    // })
    //   .then((response) =>  response.json())
    //   .then((userData) => dispatch({
    //     type: REGISTER,
    //     payload: userData
    //   }))
    dispatch({
      type: REGISTER,
      payload: { name: 'Bryan', dob: '10/21/1991', email: 'brysadler@gmail.com' }
    })
  } else {
    dispatch({
      type: REGISTER,
      validationError: valid
    })
  }
}


/**
 * import { LOGIN, REGISTER } from "./types"
 import { validateLogin, validateRegistration } from "../utils"
 import { modalProfile } from './viewActions'
 import { addUser, getUser } from "../service/link";

 export const loginUser = (creds) => dispatch => {
  const valid = validateLogin(creds)
  if (valid.isValidated) {
    return getUser()
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: { name: res.firstName, dob: res.dob, email: res.email }
        })
      })
  } else {
    dispatch({
      type: LOGIN,
      validationError: valid
    })
  }
}

 export const registerUser = (userInfo) => dispatch => {
  console.log('register user')
  const valid = validateRegistration(userInfo)
  if (valid.isValidated) {
    return addUser()
      .then((res) => {
        dispatch({
          type: REGISTER,
          payload: { name: res.firstName, dob: res.dob, email: res.email }
        })
      })
  } else {
    dispatch({
      type: REGISTER,
      validationError: valid
    })
  }
}

 // export const setDefaults = () =
 * */
// export const setDefaults = () =