import React, { useState, useEffect, useRef } from 'react'

const useTransitionHeight = () => {
  const [height, setHeight] = useState()
  const containerRef = useRef(null)

  useEffect(() => {
    let rect = containerRef.getBoundingRectClient()
  }, [containerRef.current])

  const Container = ({ children }) => {
    return (
      <div ref={containerRef} style={{ '--height': height }}>
        {children}
      </div>
    )
  }

  return [Container]
}
