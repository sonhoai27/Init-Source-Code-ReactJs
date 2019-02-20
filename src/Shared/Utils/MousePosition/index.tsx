import { useEffect, useState } from 'react'

const MousePosition = () => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 })
  const onGetPosition = e => setCurrentPosition({
    x: e.clientX,
    y: e.clientY,
  })

  useEffect(() => {
    window.addEventListener('mouseover', onGetPosition, false)

    return () => {
      window.removeEventListener('mouseover', onGetPosition, false)
    }

  }, [currentPosition])

  return currentPosition
}

export default MousePosition
