import React from 'react'

const noop = () => {}
const FormButton = ({ label, onClick = noop }) => (
  <button
    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
)

export default FormButton
