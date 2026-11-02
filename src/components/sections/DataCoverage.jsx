'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { LazyVideo } from '@/components/ui/LazyVideo'

const FEATURES = [
  {
    title: 'Double fill rates with multi-source data enrichment',
    text: 'Replace individual vendor contracts with instant access to 100+ data providers for contact info, firmographics, and more. Get 2-3x better coverage than single-source solutions—whether your accounts are domestic or international.',
    cta: 'Get Enterprise',
    visual: { type: 'video', name: 'waterfall-mobile-numbers' },
  },
  {
    title: 'Find unique data points with our AI research agent',
    text: 'Stop paying for manual research from VAs, BPOs, or SDRs. Our AI agent can analyze anything online including:',
    list: [
      'Websites',
      'Earnings calls',
      'Summarize job posts or financial docs',
      'Create lead scoring models',
      'Clean and format data',
      'Enrich SMBs that traditional providers miss (e.g. hotels, car dealers, local shops, etc.)',
      'Technical documentation',
    ],
    note: 'To find data points your competitors miss.',
    cta: 'Talk to a GTM Engineer',
    visual: { type: 'video', name: 'claygent-classify' },
  },
  {
    title: 'Monitor intent across any channel',
    text: 'Track buying signals across your enterprise customer base, including:',
    list: [
      'Leadership changes',
      'Technology investments',
      'Earnings calls',
      'Hiring patterns',
    ],
    note: 'Build scoring models to identify expansion opportunities in your customer base.',
    cta: 'Get Enterprise',
    visual: { type: 'intent' },
  },
  {
    title: 'Enterprise data governance',
    text: 'Keep data clean and consistent across millions of records with automated validation rules and standardization. Define custom taxonomies, normalize fields like company names and revenue ranges, and maintain audit trails for compliance.',
    cta: 'Talk to a GTM Engineer',
    visual: { type: 'image', src: '/images/data-coverage/normalize.png' },
  },
]

// positions measured on clay.com, in % of the square frame; className holds full strings for Tailwind
const INTENT_TAGS = [
  {
    name: 'tag-placeholder',
    className: 'top-[8%] left-[71%] w-[20%]',
    delay: 0,
  },
  {
    name: 'tag-placeholder',
    className: 'top-[25%] -left-[4%] w-[20%]',
    delay: 100,
  },
  {
    name: 'tag-tsunoda',
    className: 'top-[23%] left-[35%] w-[40%]',
    delay: 200,
  },
  {
    name: 'tag-peter',
    className: 'top-[42%] left-[9%] w-[40%] opacity-90',
    delay: 350,
    // tucked under the table edge
    behindTable: true,
  },
  {
    name: 'tag-melissa',
    className: 'top-[48%] left-[54%] w-[40%]',
    delay: 500,
  },
]

function IntentTag({ tag, active }) {
  return (
    <Image
      src={`/images/data-coverage/${tag.name}.svg`}
      width={207}
      height={72}
      alt=""
      style={{ animationDelay: `${tag.delay}ms` }}
      className={clsx(
        'absolute h-auto',
        tag.className,
        active && 'motion-safe:animate-TagIn',
      )}
    />
  )
}

function IntentSignals({ active }) {
  return (
    <div className="relative size-full bg-[#03331d]">
      {INTENT_TAGS.filter((tag) => tag.behindTable).map((tag) => (
        <IntentTag key={tag.className} tag={tag} active={active} />
      ))}
      <Image
        src="/images/data-coverage/intent-table.svg"
        width={590}
        height={279}
        alt=""
        className="absolute inset-x-0 bottom-0 h-[46%] w-full bg-white object-cover object-top"
      />
      {INTENT_TAGS.filter((tag) => !tag.behindTable).map((tag) => (
        <IntentTag key={tag.className} tag={tag} active={active} />
      ))}
    </div>
  )
}

function Visual({ visual, active }) {
  return (
    <div className="aspect-square overflow-hidden rounded-3xl bg-white lg:rounded-[40px]">
      {visual.type === 'video' && (
        <LazyVideo
          src={`/videos/${visual.name}.mp4`}
          poster={`/images/data-coverage/${visual.name}.jpg`}
          width={1080}
          height={1080}
          active={active}
          className="size-full object-cover"
        />
      )}
      {visual.type === 'intent' && <IntentSignals active={active} />}
      {visual.type === 'image' && (
        <Image
          src={visual.src}
          width={1600}
          height={1200}
          sizes="(min-width: 1240px) 620px, (min-width: 1024px) 50vw, 100vw"
          alt=""
          className="size-full object-cover"
        />
      )}
    </div>
  )
}

export default function DataCoverage() {
  const [active, setActive] = useState(0)
  const listRef = useRef(null)

  // the feature crossing the middle of the viewport is the active one
  useEffect(() => {
    const items = [...listRef.current.children]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(items.indexOf(entry.target))
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="container-page py-[48px] md:py-[64px] lg:py-[96px]">
      <div className="mx-auto max-w-[845px] text-center">
        <h2 className="text-3xl text-balance md:text-4xl lg:text-5xl">
          Unique and complete data coverage that fits your ICP
        </h2>
        <p className="mt-6 md:text-xl">
          Get the data quality your GTM teams need through multi-source
          enrichment, custom AI research, and flexible data pipelines - all
          without complex engineering work or procurement overhead.
        </p>
      </div>

      <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[5fr_6fr] lg:gap-16">
        <ul ref={listRef} className="space-y-16 lg:space-y-0">
          {FEATURES.map((feature, index) => (
            <li
              key={feature.title}
              className={clsx(
                'transition-opacity duration-300 lg:flex lg:min-h-[80vh] lg:flex-col lg:justify-center',
                index !== active && 'opacity-20',
              )}
            >
              <div aria-hidden="true" className="mb-6 lg:hidden">
                <Visual visual={feature.visual} active={index === active} />
              </div>
              <h3 className="mb-3 text-2xl lg:text-[32px] lg:leading-9">
                {feature.title}
              </h3>
              <p>{feature.text}</p>
              {feature.list && (
                <ul className="my-4 list-disc space-y-1 pl-5">
                  {feature.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {feature.note && <p>{feature.note}</p>}
              <ArrowLink className="mt-6">{feature.cta}</ArrowLink>
            </li>
          ))}
        </ul>

        {/* desktop: one sticky frame, visuals cross-fade as features scroll by */}
        <div aria-hidden="true" className="max-lg:hidden">
          <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center">
            <div className="ml-auto grid w-full max-w-[calc(100vh-8rem)]">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'col-start-1 row-start-1 transition-opacity duration-500',
                    index !== active && 'opacity-0',
                  )}
                >
                  <Visual visual={feature.visual} active={index === active} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
