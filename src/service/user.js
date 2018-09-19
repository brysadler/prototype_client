export const login = (creds) => {
  //TODO: add process env variabels for defining web route
  return call('localhost:4040/login', creds)
}

export const register = (userInfo) => {
  return call('localhost:4040/registerUser', userInfo)
}

function call (url, params) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: params
  })
    .then((response) =>  response.json())
}