import { config } from '../config'

const fetchToken = (token) => {
  console.log('account linking..')
  fetch('http://localhost:3030/addClient', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(token)
  })
    .then((res) => res.json())
}

export const addUser = () =>  {
  console.log('getting public token..')
  const handler = Plaid.create({
    apiVersion: 'v2',
    clientName: 'Plaid Walkthrough Demo',
    env: 'sandbox',
    product: ['transactions'],
    key: config.link.key,
    onSuccess: (publicToken) => {
      console.log(publicToken)
      return fetchToken(publicToken)
    }
  })

  handler.open()
}

export const getUser = (creds) => {
  console.log('loggin user in')
  return true
}
