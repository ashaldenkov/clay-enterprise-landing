import Image from 'next/image'
import { ArrowLink } from '@/components/ui/ArrowLink'

const BADGES = [
  {
    title: 'SOC 2 Type II',
    text: 'We are SOC 2 Type II compliant. Request our SOC 2 in our Trust Center.',
    image: '/images/security/soc2.avif',
  },
  {
    title: 'GDPR',
    text: 'Go to market anywhere in the world — let us handle compliance with local laws.',
    image: '/images/security/gdpr.avif',
  },
  {
    title: 'CCPA',
    text: 'Support your customer base with opt out and DNC support.',
    image: '/images/security/ccpa.avif',
  },
  {
    title: 'ISO 27001',
    text: 'Securely connect your CRM and other systems.',
    image: '/images/security/iso-27001.avif',
  },
]

export default function Security() {
  return (
    <section className="bg-oatBg py-[48px] md:py-[64px] lg:py-[96px]">
      <div className="container-page">
        <h2 className="mb-6 text-3xl text-balance md:text-4xl lg:text-5xl">
          Backed by enterprise-grade security and scale
        </h2>
        <ArrowLink
          href="https://trust.clay.com/"
          variant="outline"
          className="bg-white"
        >
          Security at Clay
        </ArrowLink>

        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-12 md:gap-x-6 lg:grid-cols-4">
          {BADGES.map((badge) => (
            <li key={badge.title} className="flex flex-col items-center">
              <Image
                src={badge.image}
                width={256}
                height={256}
                sizes="(min-width: 1024px) 256px, (min-width: 768px) 192px, 112px"
                alt=""
                className="mb-4 w-full max-w-28 transition-transform duration-150 ease-out hover:-rotate-6 md:max-w-48 lg:max-w-64"
              />
              <h3 className="mb-2 text-center">{badge.title}</h3>
              <p className="text-center text-sm text-balance text-oatText md:text-base">
                {badge.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
