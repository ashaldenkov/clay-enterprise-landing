'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { SlideNextButton, SlidePrevButton } from './SwiperButtons'
import useWindowsize from '@/hooks/useWindowsize'

const QUOTE_ICON = '/images/testimonials/quote.svg'

const TESTIMONIALS = [
  {
    quote:
      'Clay’s innate multi-source data enrichment paired with customized GPT prompts offers powerful combination of AI and data orchestration for GTM teams.',
    author: 'Keith Jones',
    role: 'GTM Systems Lead, OpenAI',
    avatar: '/images/testimonials/keith-jones.avif',
    company: {
      name: 'OpenAI',
      logo: '/images/testimonials/openai.svg',
      width: 48,
      height: 48,
    },
    accent: '#0382f7',
  },
  {
    quote:
      'Clay should be an essential pillar of every company’s GTM stack, enabling outbound built on the highest quality data foundation possible. Now you can automate hours of manual research so sales teams can focus on selling.',
    author: 'Stevie Case',
    role: 'CRO, Vanta',
    avatar: '/images/testimonials/stevie-case.avif',
    company: {
      name: 'Vanta',
      logo: '/images/testimonials/vanta.avif',
      width: 96,
      height: 37,
    },
    accent: '#fdad15',
  },
  {
    quote:
      'Clay is a game changer for marketing, data, and operations. We have tripled our enrichment rate with Clay’s combination of data providers vs. our previous solution. We’re using the best aggregate results across a waterfall of data sources, and implementing complex workflow logic even beyond enrichment—of course powered by AI. Clay makes it easy to use AI for GTM initiatives, unlocking new workflows that were infeasible before.',
    author: 'Davide Grieco',
    role: 'Director of Growth, Verkada',
    avatar: '/images/testimonials/davide-grieco.avif',
    company: {
      name: 'Verkada',
      logo: '/images/testimonials/verkada.avif',
      width: 86,
      height: 48,
    },
    accent: '#eff1f3',
  },
  {
    quote:
      'Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program. Our auto-approval rate has jumped to ~40%—with no manual work needed.',
    author: 'Josh Kim',
    role: 'Head of Growth Programs, Notion',
    avatar: '/images/testimonials/josh-kim.avif',
    company: {
      name: 'Notion',
      logo: '/images/testimonials/notion.svg',
      width: 92,
      height: 32,
    },
    accent: '#dd2c53',
  },
  {
    quote:
      'I love using and working with Clay because its extensive customization options allow it to seamlessly integrate into various systems, making it an essential part of our tech stack. Their hands-on customer support ensures we build out flows in the most efficient way possible, enhancing our overall productivity and effectiveness.',
    author: 'David Bulmer',
    role: 'Sales Ops, Ramp',
    avatar: '/images/testimonials/david-bulmer.avif',
    company: {
      name: 'Ramp',
      logo: '/images/testimonials/ramp.svg',
      width: 96,
      height: 26,
    },
    accent: '#0382f7',
  },
  {
    quote:
      'Demand generation at scale needs to be programmatic, automated and high quality. Clay helps us make that happen by cutting down manual work and maximizing human touches for millions of leads each month. Clay helps us create accurate outreach that protects our brand as we outbound intelligently.',
    author: 'Tommy Wang',
    role: 'Chief Business Officer, ClickUp',
    avatar: '/images/testimonials/tommy-wang.avif',
    company: {
      name: 'ClickUp',
      logo: '/images/testimonials/clickup.svg',
      width: 96,
      height: 25,
    },
    accent: '#3ece82',
  },
  {
    quote:
      'Not having Clay would hugely reduce our ability to run good outbound campaigns. We wouldn’t be calling people as much, because it’s hard to get good phone numbers. We wouldn’t be emailing as much, because we’d be likely to bounce or go to spam. With Clay, we have a reliable source of data enrichment and can run dynamic, multi-touch outreach sequences.',
    author: 'Julien Reiman',
    role: 'Head of Sales, Baseten',
    avatar: '/images/testimonials/julien-reiman.avif',
    company: {
      name: 'Baseten',
      logo: '/images/testimonials/baseten.avif',
      width: 48,
      height: 48,
    },
    accent: '#eee9df',
  },
  {
    quote:
      'Scaling inefficient SDR work isn’t possible without an infinite flow of capital. Clay helps automate mundane tasks like contact data enrichment, including pulling signals and triggers, so SDRs can focus their time on prioritized selling and spend their days more effectively. It evolves the SDR role and aligns it with better with marketing paths for more upward career momentum.',
    author: 'Kris Rudegraap',
    role: 'CEO, Sendoso',
    avatar: '/images/testimonials/kris-rudegraap.avif',
    company: {
      name: 'Sendoso',
      logo: '/images/testimonials/sendoso.avif',
      width: 86,
      height: 48,
    },
    accent: '#5c15cc',
  },
]

const CustomersSay = () => {
  const size = useWindowsize()

  let swiperContainerStyle = ''
  let slidesPerView = 1

  if (size?.width && size?.width >= 768 && size?.width && size?.width < 1024) {
    swiperContainerStyle = { padding: '96px 32px' }
    slidesPerView = 2
  } else if (size?.width && size?.width >= 1024) {
    swiperContainerStyle = { padding: '64px 36px' }
    slidesPerView = 2.2
  } else {
    swiperContainerStyle = { padding: '32px 20px' }
  }

  return (
    <div className="mx-auto max-w-[1240px]">
      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        style={swiperContainerStyle}
        wrapperClass="cursor-grab"
      >
        <div
          slot="container-start"
          className="md:flex md:items-end md:justify-between"
        >
          <div className="mb-8 basis-[50%] text-3xl md:text-4xl lg:text-5xl">
            What our customers say about us...
          </div>
          <div className="mb-8 flex items-end gap-4">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </div>

        {TESTIMONIALS.map((item) => (
          <SwiperSlide key={item.author}>
            <div
              className="h-[533px] w-full rounded-lg p-2 transition-shadow duration-400 md:h-[492px] lg:h-[455px] lg:hover:shadow-[0_50px_80px_-40px_#0006]"
              style={{ backgroundColor: item.accent }}
            >
              <div className="flex h-full w-full flex-col justify-between gap-4 rounded-sm bg-white p-4">
                <Image src={QUOTE_ICON} width={17} height={12} alt="" />
                <div>{item.quote}</div>
                <div className="mt-auto flex items-start justify-between border-t border-black pt-8">
                  <div className="flex items-end gap-2">
                    <Image
                      src={item.avatar}
                      width={76}
                      height={76}
                      className="rounded-sm border-2 border-black"
                      alt={item.author}
                    />
                    <div>
                      <div>{item.author}</div>
                      <div className="text-sm">{item.role}</div>
                    </div>
                  </div>
                  <Image
                    src={item.company.logo}
                    width={item.company.width}
                    height={item.company.height}
                    alt={item.company.name}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomersSay
