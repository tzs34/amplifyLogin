import React, { useState } from 'react'

const SignUpForm = ({ history }) => {
  const [signUp, setSignUp] = useState({})

  function handleInputChange({ target: { id, value } }) {
    setSignUp({ ...signUp, ...{ [id]: value } })
  }

  function onSignIn() {
    history.push('/login')
  }
  return (
    <div className="mx-auto w-full max-w-xs">
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
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            key="email"
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="phone_number"
          >
            Telephone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="phone_number"
            key="phone_number"
            name="phone_number"
            onChange={handleInputChange}
            type="tel"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <button
              className="bg-blue hover:bg-blue-dark text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {}}
            >
              SignUp
            </button>
          </div>
          <div>
            <p className="text-grey-dark text-xs">
              Aleady have an account{' '}
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={onSignIn}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
