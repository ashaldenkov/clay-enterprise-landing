'use client'
import { useEffect, useRef } from 'react'

// muted looping clip that loads and plays only near the viewport
export function LazyVideo({ src, type = 'video/mp4', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects when pause() interrupts it
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video ref={ref} muted loop playsInline preload="none" {...props}>
      <source src={src} type={type} />
    </video>
  )
}
