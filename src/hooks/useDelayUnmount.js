import { useEffect, useState } from 'react'

export default function useDelayUnmount(isMounted, delayTime) {
  const [isRendered, setIsRendered] = useState(isMounted)

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setIsRendered(isMounted),
      isMounted ? 0 : delayTime,
    )
    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime])

  return isMounted || isRendered
}
