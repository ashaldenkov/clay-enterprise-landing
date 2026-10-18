'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ContactButton } from '@/components/ui/ContactButton'

// background holds full class strings so Tailwind can detect them
const DATA_TABS = [
  {
    id: 'contact-information',
    title: 'Contact information',
    description:
      'Search dozens of providers at once to get the best coverage on work email, mobile numbers, and more.',
    desktop: {
      image: {
        src: '/images/data-tabs/contact-information.webp',
        width: 550,
        height: 550,
      },
      background: 'h-[550px] w-fit bg-[#f8cc65]',
    },
    mobile: {
      image: {
        src: '/images/data-tabs/contact-information-mobile.webp',
        width: 500,
        height: 500,
      },
      background:
        'bg-[url("/images/backgrounds/claymation-green.webp"),linear-gradient(to_bottom,rgba(4,126,74,1),rgba(4,126,74,1))] bg-auto bg-right bg-no-repeat',
    },
  },
  {
    id: 'intent-data',
    title: 'Intent data',
    description:
      'Continuously monitor buying signals across social media and the web and be alerted for key events like job changes and major news.',
    desktop: {
      image: {
        src: '/images/data-tabs/intent-data.webp',
        width: 550,
        height: 550,
      },
      background: 'h-[550px] bg-[#038ff7]',
    },
    mobile: {
      image: {
        src: '/images/data-tabs/intent-data-mobile.webp',
        width: 500,
        height: 500,
      },
      background:
        'bg-[url("/images/backgrounds/blue.webp")] bg-auto bg-position-[left_-10px_center] bg-no-repeat',
    },
  },
  {
    id: 'firmographic-data',
    title: 'Firmographic data',
    description:
      'Get the best coverage on standard firmographics and technographics like employee count by role and location, plus custom data points that our agents can find for your unique business.',
    desktop: {
      image: {
        src: '/images/data-tabs/firmographic.webp',
        width: 526,
        height: 526,
        className: 'h-full object-cover',
      },
      background: 'h-full bg-[#a789fe]',
    },
    mobile: {
      image: {
        src: '/images/data-tabs/firmographic-mobile.webp',
        width: 526,
        height: 526,
      },
      background:
        'bg-[linear-gradient(to_bottom,#9170e6,#9170e6)] bg-auto bg-right bg-no-repeat',
    },
  },
  {
    id: 'any-data-point',
    title: 'Any data point on the internet',
    description:
      'Find most data points you can imagine with our AI research agent. That includes categorizing companies as B2B vs. B2C, checking SOC-II compliance, finding the number of franchise locations of a restaurant, etc. See examples of questions that are easy to ask with Claygent, our AI web scraper.',
  },
]

const CLAYGENT_ARROW = '/images/data-tabs/claygent-arrow.png'

const CLAYGENT_QUESTIONS = [
  'When did this company last raise money?',
  'Does the company host videos on its website homepage?',
  'Who are the investors of this company?',
  'Does this company allow remote work?',
  'Does the company mention CSV imports on their site?',
  'Has this company ever acquired another company?',
  'Who is the hiring manager for this open role?',
  'Does this company have a podcast?',
  'What titles does this company sell to?',
  'Who are happy customers listed as case studies?',
  'What is the average pricing listed on their site?',
  'What was the last podcast their CEO was on?',
]

function ClaygentQuestions() {
  return CLAYGENT_QUESTIONS.map((question) => (
    <li
      key={question}
      className="w-fit rounded-2xl border border-borderDrop bg-listBg p-1"
    >
      <div className="flex h-[50px] items-center rounded-xl border border-borderDrop bg-white shadow-[0_17px_20px_-10px_#0003]">
        <div className="px-3 text-xs">{question}</div>
      </div>
    </li>
  ))
}

export default function DataTabs() {
  const [openTab, setOpenTab] = useState(DATA_TABS[0].id)

  return (
    <section className="container-page">
      <div className="pb-8 lg:flex lg:items-end lg:justify-between">
        <div className="mb-8 lg:basis-7/12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Fill your CRM with deep, clean customer research
          </h2>
          <p className="mt-4 leading-8 md:text-lg md:leading-7 lg:text-xl">
            Get deep research on any customer, from contact information,
            firmographics, or any custom research query. Then, use it to craft
            the perfect outreach.
          </p>
        </div>
        <ContactButton />
      </div>

      {/* data tabs: desktop */}
      <div className="hidden lg:flex lg:items-center">
        <div className="flex h-[550px] shrink-0 basis-1/2 justify-center">
          {DATA_TABS.map(
            (tab) =>
              openTab === tab.id &&
              (tab.desktop ? (
                <div
                  key={tab.id}
                  className={clsx(
                    'flex animate-FadeIn items-center justify-center overflow-hidden rounded-sm',
                    tab.desktop.background,
                  )}
                >
                  <Image
                    src={tab.desktop.image.src}
                    width={tab.desktop.image.width}
                    height={tab.desktop.image.height}
                    className={tab.desktop.image.className}
                    alt=""
                  />
                </div>
              ) : (
                <ul
                  key={tab.id}
                  className='flex h-full w-full animate-FadeIn flex-col items-center gap-2 overflow-y-scroll rounded-sm bg-borderBg bg-[url("/images/data-tabs/claygent-arrow.png")] bg-size-[220px] bg-scroll bg-bottom-right bg-no-repeat'
                >
                  <ClaygentQuestions />
                </ul>
              )),
          )}
        </div>
        <div className="mb-6 ml-[10%] basis-1/2">
          {DATA_TABS.map((tab) => {
            const isActive = openTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                className={clsx(
                  'w-full border-b border-[#d8d8d8] pt-6 pr-8 pb-4 text-left',
                  isActive
                    ? 'text-black'
                    : 'text-[#757575] hover:text-[#038ff7]',
                )}
                onClick={() => setOpenTab(tab.id)}
              >
                <span className="block text-xl">{tab.title}</span>
                {isActive && (
                  <span className="mt-4 block animate-FadeIn">
                    {tab.description}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* data tabs: mobile */}
      <div className="lg:hidden">
        {DATA_TABS.map((tab) => (
          <div key={tab.id} className="mt-8">
            {tab.mobile ? (
              <div
                className={clsx(
                  'mb-8 flex h-[230px] items-center justify-center overflow-hidden min-[500px]:h-[400px] md:h-[500px]',
                  tab.mobile.background,
                )}
              >
                <Image
                  src={tab.mobile.image.src}
                  width={tab.mobile.image.width}
                  height={tab.mobile.image.height}
                  sizes="(min-width: 540px) 500px, 92vw"
                  alt=""
                />
              </div>
            ) : (
              <div className="relative mb-8 h-[230px] overflow-hidden overflow-y-scroll bg-borderBg min-[500px]:h-[400px] md:h-[500px]">
                <Image
                  src={CLAYGENT_ARROW}
                  width={150}
                  height={200}
                  className="absolute right-0 bottom-0 w-[150px]"
                  alt=""
                />
                <ul className="flex h-[768px] translate-y-[-20px] flex-col items-center justify-center gap-2">
                  <ClaygentQuestions />
                </ul>
              </div>
            )}
            <h3 className="text-xl">{tab.title}</h3>
            <p className="mt-4">{tab.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
