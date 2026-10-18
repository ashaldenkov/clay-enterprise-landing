'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ArrowLink } from '@/components/ui/ArrowLink'
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

const HIGHLIGHTS = [
  {
    title: 'Flexibility for any campaign',
    description:
      'Program our core components (account/lead lists, data enrichment, and messaging) into end-to-end campaigns for any outreach use case.',
    icon: '/images/icons/flexibility.png',
  },
  {
    title: 'Best data coverage',
    description:
      'Clay consolidates 75+ major enrichment tools into one credit-based marketplace. Our waterfall enrichment feature helps you query multiple tools at once to find any data point.',
    icon: '/images/icons/blog.avif',
  },
  {
    title: 'One data cleanroom',
    description:
      'Use Clay to access any enrichment tool and integrate with your CRM and email sending tool. Never deal with multiple contracts or points of security risk again.',
    icon: '/images/icons/cleanroom.png',
  },
  {
    title: 'Powerful AI research agent',
    description:
      'Automate complex, creative, and manual SDR research with our AI research agent—just provide a list of domains and ask any question.',
    icon: '/images/icons/glass.avif',
  },
]

const USE_CASES = [
  {
    id: 'inbound',
    label: 'Inbound',
    title: 'Enrich & filter your inbound leads to reach the best prospects',
    description:
      'When you have thousands of inbound leads, you need to quickly prioritize the best fits for your team. Enrich leads with contact info, firmographics, and more — then use AI to draft the perfect outreach. Get to your leads faster.',
    image: {
      src: '/images/use-cases/inbound.webp',
      width: 800,
      height: 375,
    },
    background:
      'bg-[url("/images/backgrounds/blue.webp")] bg-auto bg-position-[left_-10px] bg-no-repeat',
  },
  {
    id: 'outbound',
    label: 'Outbound',
    title: 'Build lists, enrich, and message leads in seconds',
    description:
      'Are you targeting large customers? Use a white glove approach and leverage Clay to keep your CRM updated and automate the prospecting part of going after enterprises.',
    image: {
      src: '/images/use-cases/outbound.webp',
      width: 800,
      height: 375,
    },
    background:
      'bg-[url("/images/backgrounds/pink.webp")] bg-cover bg-position-[left_-10px_center] bg-no-repeat',
  },
]

function ClaygentQuestions() {
  return CLAYGENT_QUESTIONS.map((question) => (
    <div
      key={question}
      className="w-fit rounded-2xl border border-borderDrop bg-listBg p-1"
    >
      <div className="flex h-[50px] items-center rounded-xl border border-borderDrop bg-white shadow-[0_17px_20px_-10px_#0003]">
        <div className="px-3 text-xs">{question}</div>
      </div>
    </div>
  ))
}

const Features = () => {
  const [openTab, setOpenTab] = useState(DATA_TABS[0].id)
  const [useCaseTab, setUseCaseTab] = useState(USE_CASES[0].id)

  return (
    <div className="container-page">
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
                <div
                  key={tab.id}
                  className='flex h-full w-full animate-FadeIn flex-col items-center gap-2 overflow-y-scroll rounded-sm bg-borderBg bg-[url("/images/data-tabs/claygent-arrow.png")] bg-size-[220px] bg-scroll bg-bottom-right bg-no-repeat'
                >
                  <ClaygentQuestions />
                </div>
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
                <div className="text-xl">{tab.title}</div>
                {isActive && (
                  <div className="mt-4 animate-FadeIn">{tab.description}</div>
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
                <div className="flex h-[768px] translate-y-[-20px] flex-col items-center justify-center gap-2">
                  <ClaygentQuestions />
                </div>
              </div>
            )}
            <div>
              <div className="text-xl">{tab.title}</div>
              <p className="mt-4">{tab.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* highlights */}
      <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-5 pb-[48px] min-[500px]:grid-cols-2 md:pb-[64px] lg:grid-cols-4 lg:pb-[96px]">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title} className="border p-4">
            <Image
              src={item.icon}
              width={32}
              height={32}
              alt=""
              className="size-8"
            />
            <div className="mt-4 text-xl">{item.title}</div>
            <div className="mt-4">{item.description}</div>
          </div>
        ))}
      </div>

      {/* use case tabs */}
      <div className="py-[48px] md:py-[64px] lg:py-[96px]">
        <div className="mb-8">
          <div className="mb-2.5 text-center text-3xl md:mb-4 md:text-4xl lg:text-5xl">
            Program our components for any outreach use case
          </div>
          <div className="text-center md:text-xl">
            Once your data is solid, use it with our AI message writer to help
            generate personalized copy for any campaign: inbound, outbound,
            expansion, retention.
          </div>
        </div>

        <div className="mt-[48px]">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:gap-8">
            {USE_CASES.map((useCase) => (
              <button
                key={useCase.id}
                type="button"
                className={clsx(
                  'h-[50px] w-full rounded-sm border border-inactiveTabsBorder transition-all duration-300 hover:border-gray-300 hover:text-black',
                  useCaseTab === useCase.id
                    ? 'bg-borderBg'
                    : 'bg-white text-featureGrey hover:bg-inactiveTabsBorder',
                )}
                onClick={() => setUseCaseTab(useCase.id)}
              >
                {useCase.label}
              </button>
            ))}
          </div>

          <div>
            {USE_CASES.map((useCase) => (
              <div
                key={useCase.id}
                className={clsx(
                  useCaseTab === useCase.id
                    ? 'block animate-FadeIn lg:flex lg:gap-8'
                    : 'hidden animate-FadeOut',
                )}
              >
                <div className="mb-8 flex w-full flex-col rounded-sm border border-gray-300 p-6 md:p-10 lg:basis-1/2 lg:p-[80px]">
                  <div className="text-2xl md:text-[32px] md:leading-9">
                    {useCase.title}
                  </div>
                  <p className="mt-4 mb-6 leading-5">{useCase.description}</p>
                  <ContactButton />
                </div>

                <div
                  className={clsx(
                    'mb-8 flex aspect-square items-center justify-center overflow-hidden lg:basis-1/2',
                    useCase.background,
                  )}
                >
                  <Image
                    src={useCase.image.src}
                    width={useCase.image.width}
                    height={useCase.image.height}
                    sizes="(min-width: 1024px) 540px, 85vw"
                    alt=""
                    className="w-[90%] rounded-xl border border-inactiveTabsBorder bg-[rgba(255,255,255,0.3)] p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* salesforce */}
      <div className="py-[16px] md:py-[32px] lg:flex lg:gap-8 lg:py-[64px]">
        <Image
          src={'/images/salesforce/sdr-package.avif'}
          width={500}
          height={500}
          sizes="(min-width: 1240px) 580px, (min-width: 1024px) 50vw, 100vw"
          alt=""
          className="mb-8 h-fit max-lg:w-full lg:basis-1/2"
        />
        <div className="mb-8 flex w-full flex-col rounded-sm border border-gray-200 p-6 md:p-10 lg:basis-1/2 lg:p-[80px]">
          <div className="mb-3 w-fit rounded-sm border border-purple-300 bg-purple-200 px-3 text-xs leading-6 text-purple-700 lg:mb-6">
            Salesforce package
          </div>
          <div className="text-2xl md:text-[32px] md:leading-9">
            Automate prospecting and data enrichment—without leaving Salesforce
          </div>
          <p className="my-6">
            Grow pipeline faster by helping sellers find, enrich, and draft
            messages to any contact on-demand—without ever leaving Salesforce.
          </p>
          <ArrowLink variant="outline">
            Learn more about our Salesforce package
          </ArrowLink>
        </div>
      </div>
    </div>
  )
}

export default Features
