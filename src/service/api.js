// return total amount charged, last time charged, how much until next charge
export const accountDetails = id => {
  return call('localhost:4040/getAccountDetails', id)
}

export const transactions = id => {
  return call('localhost:4040/getTransactions', id)
}

function call (url, id) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: id
  })
    .then((response) =>  response.json())
}

