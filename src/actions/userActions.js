import { LOGIN, REGISTER } from "./types"
import { validateLogin, validateRegistration } from "../utils"
import { login, register } from "../service/user"


export const loginUser = (creds) => async (dispatch) => {
  const valid = validateLogin(creds)
  if (valid.isValidated) {
    const res = await login(creds)
    console.log('response:', res)
    if (res.statusCode === 200) {
      const user = res
      //console.log('user:', user)

      dispatch({
        type: LOGIN,
        payload: user
      })
    } else {
      dispatch({
        type: LOGIN,
        validationError: { isValidated: false, message: 'Invalid username or password'}
      })
    }
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
          payload: user
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