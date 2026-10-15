'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { SlideNextButton, SlidePrevButton } from './SwiperButtons'
import useWindowsize from '@/hooks/useWindowsize'
import { asset, cmsAsset } from '@/lib/cdn'

const QUOTE_ICON = asset('664d6fb7115ae062aa4da176_quote-icon.svg')

const TESTIMONIALS = [
  {
    quote:
      'Clay’s innate multi-source data enrichment paired with customized GPT prompts offers powerful combination of AI and data orchestration for GTM teams.',
    author: 'Keith Jones',
    role: 'GTM Systems Lead, OpenAI',
    avatar: cmsAsset('66756a7232ecd63cd322883e_keith-jones.avif'),
    company: {
      name: 'OpenAI',
      logo: cmsAsset('66756b483018a6f31e1eb0b3_img-logo-icon-openai.svg'),
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
    avatar: cmsAsset('667c376cac4c1c2f449dc5c6_image%20(11).avif'),
    company: {
      name: 'Vanta',
      logo: cmsAsset('667c3793992d2925d4708be9_images.avif'),
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
    avatar: cmsAsset('667b1c28e0f601dece9badaf_image%20(7).avif'),
    company: {
      name: 'Verkada',
      logo: cmsAsset('667d272717789803344f6ada_verkada-logo-vector-2022.avif'),
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
    avatar: cmsAsset('667b1c0e213afc005ab64813_image%20(5).avif'),
    company: {
      name: 'Notion',
      logo: cmsAsset(
        '667b1ca78e957d98b3405ade_661ce1b188dd92f7fc53b822_img_logo_notion.svg%20filllogo-hero.svg',
      ),
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
    avatar: cmsAsset('667e8ad4ea54872465f31adf_1715045396139.avif'),
    company: {
      name: 'Ramp',
      logo: cmsAsset(
        '667e8b996b1b3db06c2a02c4_Ramp_Business_Corporation_Logo.svg',
      ),
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
    avatar: cmsAsset('667d6f5c980b275daf611636_image%20(17).avif'),
    company: {
      name: 'ClickUp',
      logo: cmsAsset('667d6f7308f927ea95e08358_clickup%20(1).svg'),
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
    avatar: cmsAsset('667b1c67c6fbffc261d65d23_image%20(8).avif'),
    company: {
      name: 'Baseten',
      logo: cmsAsset('667b1c9814fc5c9552203d0f_image%20(9).avif'),
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
    avatar: cmsAsset('667b1da0ad5a40f8dd7f1b5d_image%20(10).avif'),
    company: {
      name: 'Sendoso',
      logo: cmsAsset('667bbaccc1fd0c0d87a9a1f7_sendoso-vector-logo.avif'),
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
