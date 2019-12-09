import React, { useState } from 'react'
import { login } from '../../services/AWSService'
import { validateLoginForm } from '../Form/form-utils'

const LoginForm = ({ history }) => {
  const [user, setUser] = useState({})
  const [errorMsg, setErrorMsg] = useState()

  function handleInputChange({ target: { id, value } }) {
    setUser({ ...user, ...{ [id]: value } })
  }

  async function onSubmitForm() {
    if (validateLoginForm(user)) {
      login({ username: 'john', password: '12fdcFR45G' })
    }
  }

  function onCreateAccount() {
    console.log('push')
    history.push('/signup')
  }

  return (
    <div className="mx-auto w-full max-w-xs">
      <div>
        {errorMsg.length > 0 && (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Error: </strong>
            <span class="block sm:inline">{errorMsg}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      </div>
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
          <button
            className="bg-blue hover:bg-blue-dark text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmitForm}
          >
            Login
          </button>
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
      </form>
    </div>
  )
}

export default LoginForm
