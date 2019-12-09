import React, { useState, useEffect, useRef } from 'react'

const useTransitionHeight = () => {
  const [height, setHeight] = useState()
  const containerRef = useRef(null)

  useEffect(() => {
    let { height } = containerRef.current.getBoundingClientRect()
    setHeight(height)
  })

  const Container = ({ children }) => {
    return (
      <div ref={containerRef} style={{ '--height': height }}>
        {children}
      </div>
    )
  }

  return [Container]
}
