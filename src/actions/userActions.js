import { LOGIN, REGISTER } from "./types"
import { validateLogin, validateRegistration } from "../utils"
import { login, register } from "../service/user"


export const loginUser = (creds) => dispatch => {
  const valid = validateLogin(creds)
  if (valid.isValidated) {
    return login(creds)
      .then((user) => {
        dispatch({
          type: LOGIN,
          payload: { name: user.firstName, dob: user.dob, email: user.email }
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
  const valid = validateRegistration(userInfo)
  if (valid.isValidated) {
    return register(userInfo)
      .then((user) => {
        dispatch({
          type: REGISTER,
          payload: { name: user.firstName, dob: user.dob, email: user.email }
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