'use client'
import { useEffect, useRef, useState } from 'react'

// muted looping clip that loads and plays only near the viewport while active
export function LazyVideo({
  src,
  type = 'video/mp4',
  active = true,
  ...props
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = ref.current
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (inView && active && !reduceMotion) {
      // play() rejects when pause() interrupts it
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [inView, active])

  return (
    <video ref={ref} muted loop playsInline preload="none" {...props}>
      <source src={src} type={type} />
    </video>
  )
}
