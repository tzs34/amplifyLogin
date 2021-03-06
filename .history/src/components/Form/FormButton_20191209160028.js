import React from 'react'

const noop = () => {}
const FormButton = ({ label, type, onClick = noop }) => (
  <button
    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 p-3  border border-gray-400 rounded shadow"
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
)

export default FormButton
