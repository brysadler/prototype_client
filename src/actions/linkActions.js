import { LINK_ACCOUNT } from "./types"
import { addAccount } from '../service/link'

export const addUserBankAccount = (token, id) => async (dispatch) => {
  console.log('adding user back account..')
  const user = await addAccount(token, id)
  if (user.statusCode === 200) {
    dispatch({
      type: LINK_ACCOUNT,
      payload: user
    })
  } else {
    dispatch({

    })
  }
}

