import React, { useState, useLayoutEffect, useRef } from 'react'
import './hooks.css'
const useTransitionHeight = () => {
  const [height, setHeight] = useState()
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (!containerRef) return
    let { height } = containerRef.current.getBoundingClientRect()
    setHeight(height)
  })

  const Container = ({ children }) => {
    return (
      <div
        ref={containerRef}
        style={{ '--height': height }}
        className="container"
      >
        {children}
      </div>
    )
  }

  return [Container]
}

export default useTransitionHeight
