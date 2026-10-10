import { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'

// re-renders on every slide change so isBeginning / isEnd stay current
export const useSwiperReactive = () => {
  const swiper = useSwiper()
  const [, setSignal] = useState({})

  useEffect(() => {
    if (!swiper) return
    const forceRerender = () => setSignal({})
    swiper.on('slideChange', forceRerender)
    return () => swiper.off('slideChange', forceRerender)
  }, [swiper])

  return swiper
}
