import React from 'react'
import TeamList from './teamList'
import ContactBtn from './contactBtn'
import Image from 'next/image'

const Reviews = () => {
  return (
    <div className="mx-auto max-w-[1240px] px-5 py-[16px] md:px-9 md:py-[32px] lg:px-6 lg:py-[64px]">
      <div className="lg:flex">
        <div className="mb-8 flex flex-col items-center lg:basis-1/2 lg:items-start">
          <div className="mb-3 text-center text-3xl md:text-4xl lg:text-start lg:text-5xl">
            A platform & people you can trust
          </div>
          <ContactBtn />
        </div>
        <div className="flex w-full gap-[20px] lg:basis-1/2">
          <Image
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/665e5691d6207ae5cceb5751_Frameclay-badges-1.svg"
            loading="lazy"
            width={108}
            height={140}
            alt=""
            className="w-[calc((100%-60px)/4)] flex-auto"
          />
          <Image
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/665e56913217b03853d1938e_Frameclay-badges-3.svg"
            loading="lazy"
            width={108}
            height={140}
            alt=""
            className="w-[calc((100%-60px)/4)] flex-auto"
          />
          <Image
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/665e569119b1a5bcb09d8a43_Frameclay-badges-2.svg"
            loading="lazy"
            width={108}
            height={140}
            alt=""
            className="w-[calc((100%-60px)/4)] flex-auto"
          />
          <Image
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/665e5691567055ec23d68353_Frameclay-badges.svg"
            loading="lazy"
            width={108}
            height={140}
            alt=""
            className="w-[calc((100%-60px)/4)] flex-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-6 text-center text-xs font-bold uppercase">
          Trusted by more than 100,000 leading GTM teams of all sizes
        </div>
        <TeamList />
      </div>

      <div className="my-10 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <div className="border border-borderClr p-6">
          <div className="text-lg">SOC 2</div>
          <p className="mt-4">
            We are SOC 2 Type II compliant. Request our SOC 2 in our Trust
            Center
          </p>
        </div>
        <div className="border border-borderClr p-6">
          <div className="text-lg">GDPR</div>
          <p className="mt-4">
            Go to market anywhere in the world — let us handle compliance with
            local laws.
          </p>
        </div>
        <div className="border border-borderClr p-6">
          <div className="text-lg">CCPA</div>
          <p className="mt-4">
            Support your customer base with opt out and DNC support.
          </p>
        </div>
        <div className="border border-borderClr p-6">
          <div className="text-lg">ISO 27001 (coming soon)</div>
          <p className="mt-4">Securely connect your CRM and other systems.</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews
