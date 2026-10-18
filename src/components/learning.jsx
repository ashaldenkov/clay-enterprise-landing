'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { SlideNextButton, SlidePrevButton } from './SwiperButtons'
import useWindowsize from '@/hooks/useWindowsize'
import { ArrowLink } from '@/components/ui/ArrowLink'

const RESOURCES = [
  {
    title: 'Clay University',
    description:
      'Master Clay in a few core lessons. Uplevel your data enrichment, craft better outbound messages, and book more meetings.',
    cta: 'Learn with Clay',
    image: {
      src: '/images/resources/university.avif',
      width: 800,
      height: 483,
    },
  },
  {
    title: 'Go to market blog',
    description:
      'Our best content on growing your GTM motion, from outbound sales automation to AI lead generation.',
    cta: 'Explore our blog',
    image: {
      src: '/images/resources/blog.webp',
      width: 800,
      height: 639,
    },
  },
  {
    title: 'Integrations',
    description:
      'Browse through all the integrations you can connect to Clay in seconds and discover what you can do!',
    cta: 'Check integrations',
    image: {
      src: '/images/resources/integrations.webp',
      width: 800,
      height: 490,
    },
  },
  {
    title: 'Templates',
    description: 'Power your outbound campaigns with our best templates.',
    cta: 'Visit Clay templates',
    image: {
      src: '/images/resources/templates.webp',
      width: 800,
      height: 504,
    },
  },
  {
    title: 'Clay Experts',
    description:
      'Hire a Clay Enterprise expert or find a Clay partner to help with your next project',
    cta: 'Explore Clay experts',
    image: {
      src: '/images/resources/experts.webp',
      width: 500,
      height: 312,
    },
  },
  {
    title: 'Clay’s Chrome extension',
    description:
      'Clay’s Chrome Extension makes it wicked easy to find leads almost anywhere on the internet',
    cta: 'Explore Chrome Extension',
    image: {
      src: '/images/resources/chrome-extension.webp',
      width: 500,
      height: 312,
    },
  },
]

const Learning = () => {
  const size = useWindowsize()

  let secondSwiperContainerStyle = ''
  let secondSwiperSlidesPerView = 1

  if (size?.width && size?.width >= 768 && size?.width && size?.width < 1024) {
    secondSwiperContainerStyle = { padding: '96px 32px 128px 32px' }
    secondSwiperSlidesPerView = 2.2
  } else if (size?.width && size?.width >= 1024) {
    secondSwiperContainerStyle = { padding: '64px 36px 96px 36px' }
    secondSwiperSlidesPerView = 3
  } else {
    secondSwiperContainerStyle = { padding: '32px 20px 64px 20px' }
  }

  return (
    <div className="mx-auto max-w-[1240px]">
      <Swiper
        spaceBetween={20}
        slidesPerView={secondSwiperSlidesPerView}
        style={secondSwiperContainerStyle}
        wrapperClass="cursor-grab"
      >
        <div
          slot="container-start"
          className="md:flex md:items-end md:justify-between"
        >
          <div className="mb-8 basis-[50%]">
            <div className="text-3xl md:text-4xl lg:text-5xl">
              Learn with our resources
            </div>
            <div className="mt-4 md:text-lg lg:text-xl">
              Check out Clay University, read our GTM blog, or try out our top
              templates to transform your growth ideas into outreach in minutes.
            </div>
          </div>
          <div className="mb-8 flex items-end gap-4">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </div>

        {RESOURCES.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="h-[397px] w-full rounded-lg border border-inactiveTabsBorder bg-borderBg p-2 transition-shadow duration-400 lg:hover:shadow-[0_50px_80px_-40px_#0006]">
              <div className="flex h-full w-full flex-col justify-between rounded-sm border border-inactiveTabsBorder bg-white p-4">
                <div className="mb-4 h-[146px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="mb-4 text-2xl">{item.title}</div>
                <div className="mb-4">{item.description}</div>
                <ArrowLink
                  variant="text"
                  className="mt-auto text-sm whitespace-nowrap"
                >
                  {item.cta}
                </ArrowLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Learning
