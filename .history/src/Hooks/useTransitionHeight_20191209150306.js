import React, { useState, useLayoutEffect, useRef } from 'react'

const useTransitionHeight = () => {
  const [height, setHeight] = useState()
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (!containerRef) return
    let { height } = containerRef.current.getBoundingClientRect()
    setHeight(height)
  })

  const Container = ({ children }) => {
    return <div ref={containerRef}>{children}</div>
  }

  return [height, Container]
}

export default useTransitionHeight
