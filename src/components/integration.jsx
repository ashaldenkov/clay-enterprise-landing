import React from 'react'
import ContactBtn from './contactBtn'
import Image from 'next/image'
import ClayScreen from '@/images/clayScreen.png'

const Integration = () => {
  return (
    <div className="mx-auto max-w-[1240px] px-5 md:px-9 lg:px-6">
      <div className="py-[16px] md:py-[32px] lg:py-[64px]">
        <div className="lg:flex">
          <div className="mb-8 text-3xl md:text-4xl lg:basis-1/2 lg:text-5xl">
            Clay in your tech stack
          </div>
          <div className="mb-8 md:text-lg lg:basis-1/2 lg:text-xl">
            With a CRM, Clay, and an email sending tool, you’re ready to send
            any outreach campaign.
          </div>
        </div>
        <div className="mt-[48px] flex h-fit w-full items-center justify-center bg-socials">
          <Image
            src={ClayScreen}
            loading="lazy"
            width={849}
            height={502}
            className=""
            alt=""
          />
        </div>
      </div>

      <div className="pt-[48px] md:pt-[64px] lg:pt-[96px]">
        <div>
          <div className="mb-3 text-3xl md:text-4xl lg:text-5xl">
            Clay in your team
          </div>
          <div className="mb-8 mt-6 md:flex md:items-end md:justify-between">
            <div className="basis-1/2 max-md:mb-8 md:text-lg lg:text-xl">
              We are the backend data enrichment and orchestration layer that
              sets up your sales team for success.
            </div>
            <ContactBtn />
          </div>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads.webp"
          loading="lazy"
          width={1600}
          height={645}
          sizes="(max-width: 991px) 90vw, 95vw"
          srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads-p-2000.webp 2000w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c38e1c437b5d2780211da_group-visual-leads.webp 2444w"
          className="my-10"
          alt=""
        />
      </div>
    </div>
  )
}

export default Integration
