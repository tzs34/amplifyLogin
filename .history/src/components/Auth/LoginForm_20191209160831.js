import React, { useState } from 'react'
import { login } from '../../services/AWSService'
import { validateLoginForm } from '../Form/form-utils'
import Error from '../Alerts/Error'
import FormButton from '../Form/FormButton'
const LoginForm = ({ history }) => {
  const [user, setUser] = useState({})
  const [errorMsg, setErrorMsg] = useState('')

  function handleInputChange({ target: { id, value } }) {
    setUser({ ...user, ...{ [id]: value } })
  }

  async function onSubmitForm() {
    if (validateLoginForm(user)) {
      login({ username: 'john', password: '12fdcFR45G' }).then(
        ([error, success]) => {
          if (error && error.message) {
            setErrorMsg(error.message)
          } else {
            // set autheni=ticated true
          }
        }
      )
    }
  }

  function onCreateAccount() {
    console.log('push')
    history.push('/signup')
  }

  return (
    <div className="mx-auto w-full max-w-xs fadeIn">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            key="username"
            name="username"
            onChange={handleInputChange}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            key="password"
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <FormButton type="button" label="Login" onClick={onSubmitForm} />
          <p className="text-grey-dark text-xs">
            No Account?{' '}
            <a
              className="text-indigo cursor-pointer hover:text-indigo-darker"
              onClick={onCreateAccount}
            >
              Create account
            </a>
          </p>
        </div>
        <div>
          {errorMsg.length > 0 && (
            <div className="fadeIn">
              <Error errorMsg={errorMsg} />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginForm
