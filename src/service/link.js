import React from 'react'
import { config } from '../config'
//const Plaid = require('plaid')

export const addAccount = (token, id) => {
  console.log('account linking..')
  return call('http://localhost:3030/addAccount', { token, id })
}

function call (url, params) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ public_token: params.token, id: params.id})
  })
    .then((res) => Promise.resolve(res.json()))
    .catch(rej => console.log(rej))
}
// create user service
// add user (get back id from server, amongst other details)
// login user (get back id from server, amongst other details)

// create link service
// link account via LinkContainer

// create plaid service
// get transactions

// api service
// get last time charged
// get how much money rounding until next dollar

