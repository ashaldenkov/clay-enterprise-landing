import React from 'react'
import ContactBtn from './contactBtn'

const Options = () => {
  return (
    <div className="mx-auto max-w-[1240px] px-5 md:px-9 lg:px-6">
      {/* Colsolidate block */}
      <div className="py-[48px] md:py-[64px] lg:flex lg:py-[96px]">
        <div className="mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl">
            Consolidate your enrichment tools for better data quality at lower
            costs
          </div>
          <div className="mt-4">
            Our marketplace of 75+ integrations and our AI research agent can
            drastically improve your data foundation—and cut the time SDRs spend
            on manual work.
          </div>
        </div>
        <div className="border-gray h-fit rounded-[13px] border p-[7px]">
          <video
            autoPlay
            playsInline
            loop
            muted
            preload="none"
            className="max-w-full"
            loading="lazy"
          >
            <source
              src="https://assets.clayrun.dev/video-clay-find-phone-number.mp4"
              type="video/mp4"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Fill your CRM block */}
      <div className="pb-8 lg:flex lg:items-end lg:justify-between">
        <div className="mb-8 lg:basis-7/12">
          <div className="text-3xl md:text-4xl lg:text-5xl">
            Fill your CRM with deep, clean customer research
          </div>
          <div className="mt-4 leading-8 md:text-lg lg:text-xl">
            Get deep research on any customer, from contact information,
            firmographics, or any custom research query. Then, use it to craft
            the perfect outreach.
          </div>
        </div>
        <ContactBtn />
      </div>
    </div>
  )
}

export default Options
