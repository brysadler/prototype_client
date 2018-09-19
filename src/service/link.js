// import { config } from '../config'

const fetchToken = (token, id) => {
  console.log('account linking..')
  fetch('http://localhost:3030/addAccount', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: { public_token: token, id }
  })
    .then((res) => res.json())
}

export const linkAccount = (id) => {
  const handler = Plaid.create({
    apiVersion: 'v2',
    clientName: 'Plaid Walkthrough Demo',
    env: 'sandbox',
    product: ['transactions'],
    key: config.link.key,
    onSuccess: (publicToken) => fetchToken(publicToken, id)
  })

  handler.open()
}

// create user service
// add user (get back id from server, amongst other details)
// login user (get back id from server, amongst other details)

// create link service
// link account via Link

// create plaid service
// get transactions

// api service
// get last time charged
// get how much money rounding until next dollar

