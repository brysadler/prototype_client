export const login = (creds) => {
  //TODO: add process env variabels for defining web route
  return call('http://localhost:3030/login', creds)
}

export const register = (userInfo) => {
  return call('http://localhost:3030/registerUser', userInfo)
}

function call (url, params) {
  console.log(params)
  try {
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(params)
    })
      //.then(res => Promise.resolve(res))
      .then((response) =>  Promise.resolve(response.json()))
      .catch(rej => console.log(rej))
  } catch (e) {
    console.log(e)
  }
}