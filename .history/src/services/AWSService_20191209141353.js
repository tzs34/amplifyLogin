import { Auth } from 'aws-amplify'

async function trycatch(promise) {
  return await promise.then(data => [null, data]).catch(e => [e, null])
}

function login({ username, password }) {
  return trycatch(Auth.signIn({ username, password }))
}

export { login }
