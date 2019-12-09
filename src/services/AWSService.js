import { Auth } from 'aws-amplify'

function trycatch(promise) {
  return promise.then(data => [null, data]).catch(e => [e, null])
}

function login({ username, password }) {
  return trycatch(Auth.signIn({ username, password }))
}

export { login }
