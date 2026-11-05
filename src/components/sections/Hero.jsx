import Image from 'next/image'
import { ContactButton } from '@/components/ui/ContactButton'
import CustomerLogos from './CustomerLogos'

export default function Hero() {
  return (
    <section className="overflow-hidden bg-introBg pt-[64px] pb-[48px] md:pb-[64px] lg:pt-[128px] lg:pb-[112px]">
      <div className="container-page">
        <div className="mb-8 flex h-[28px] items-center">
          <div className="mr-5 rounded-sm border border-introTextBorder bg-introTextBg px-3 py-1 text-xs text-introTextColor">
            Enterprise
          </div>
          <div className="ml-5 w-full border-t-2 border-dashed border-black opacity-25"></div>
        </div>

        <div className="lg:flex lg:justify-between">
          <h1 className="text-4xl font-semibold md:max-w-[80%] md:text-6xl lg:basis-7/12 lg:text-7xl">
            The data foundation for any GTM workflow
          </h1>
          <div className="relative flex flex-col items-start justify-end max-lg:mt-2 lg:basis-1/3">
            <p className="mb-4 max-w-[90%] md:max-w-[60%] md:text-xl lg:max-w-[90%]">
              Help your operations team power personalized outreach campaigns —
              with no manual effort.
            </p>
            <ContactButton />
            <div className="pointer-events-none absolute w-[90vw] translate-x-[50px] translate-y-[calc(50%+2px)] md:w-[76vw] lg:w-[40vw]">
              <Image
                src="/images/hero/claymation-chord.png"
                width={1600}
                height={444}
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 76vw, 90vw"
                preload
                fetchPriority="high"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[96px] sm:mt-[128px]">
          <p className="mb-6 text-xs font-bold uppercase">
            trusted by 100,000 leading gtm teams:
          </p>
          <CustomerLogos />
        </div>
      </div>
    </section>
  )
}
