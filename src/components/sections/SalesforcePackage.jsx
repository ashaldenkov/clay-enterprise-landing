import Image from 'next/image'
import { ArrowLink } from '@/components/ui/ArrowLink'

export default function SalesforcePackage() {
  return (
    <section className="container-page py-[16px] md:py-[32px] lg:flex lg:gap-8 lg:py-[64px]">
      <Image
        src="/images/salesforce/sdr-package.avif"
        width={500}
        height={500}
        sizes="(min-width: 1240px) 580px, (min-width: 1024px) 50vw, 100vw"
        alt=""
        className="mb-8 h-fit max-lg:w-full lg:basis-1/2"
      />
      <div className="mb-8 flex w-full flex-col rounded-sm border border-gray-200 p-6 md:p-10 lg:basis-1/2 lg:p-[80px]">
        <p className="mb-3 w-fit rounded-sm border border-purple-300 bg-purple-200 px-3 text-xs leading-6 text-purple-700 lg:mb-6">
          Salesforce package
        </p>
        <h2 className="text-2xl md:text-[32px] md:leading-9">
          Automate prospecting and data enrichment—without leaving Salesforce
        </h2>
        <p className="my-6">
          Grow pipeline faster by helping sellers find, enrich, and draft
          messages to any contact on-demand—without ever leaving Salesforce.
        </p>
        <ArrowLink variant="outline">
          Learn more about our Salesforce package
        </ArrowLink>
      </div>
    </section>
  )
}
