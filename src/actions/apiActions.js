import { DETAILS } from './types'
import { accountDetails, transactions } from "../service/api"

// api service
// get last time charged
// get how much money rounding until next dollar
// return total amount charged, last time charged, how much until next charge
export const getAccountDetails = id => dispatch => {
  return accountDetails(id)
    .then((res) => {
      dispatch({
        type: DETAILS,
        payload: {
          lastChargeDate: res.lastChargeDate,
          amtUntilNextCharge: res.amtUntilNextCharge,
          totalAmtCharged: res.totalAmtCharged
        }
      })
    })
}

export const getTransactions = id => dispatch => {
  return transactions(id)
    .then((res) => {
      dispatch({
        type: TRANSACTIONS,
        payload: {
          transactions: res.transactions
        }
      })
    })
}