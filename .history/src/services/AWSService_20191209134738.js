import { Auth } from 'aws-amplify'

function trycatch(promise) {
  return promise.then(data => [null, data]).catch(e => [e, null])
}

async function login({ username, password }) {
  return trycatch(await Auth.signIn({ username, password }))
}

export { login }
