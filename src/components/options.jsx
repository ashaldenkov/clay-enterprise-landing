import React from 'react'
import ContactBtn from './contactBtn'

const Options = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-5 md:px-9 lg:px-6'>
      {/* Colsolidate block */}
      <div className='py-[48px] md:py-[64px] lg:py-[96px] lg:flex'>
        <div className='mb-8'>
          <div className='text-3xl md:text-4xl lg:text-5xl'>Consolidate your enrichment tools for better data quality at lower costs</div>
          <div className='mt-4'>Our marketplace of 75+ integrations and our AI research agent can drastically improve your data foundation—and cut the time SDRs spend on manual work.</div>
        </div>
        <div className='p-[7px] border border-gray rounded-[13px] h-fit'>
          <video autoPlay playsInline loop muted preload="none" className='max-w-full' loading="lazy">
            <source src="https://assets.clayrun.dev/video-clay-find-phone-number.mp4" type="video/mp4" />
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
      <div className='lg:flex lg:justify-between lg:items-end pb-8'>
        <div className='lg:basis-7/12 mb-8'>
          <div className='text-3xl md:text-4xl lg:text-5xl'>Fill your CRM with deep, clean customer research</div>
          <div className='mt-4 md:text-lg lg:text-xl leading-8'>Get deep research on any customer, from contact information, firmographics, or any custom research query. Then, use it to craft the perfect outreach.</div>
        </div>
        <ContactBtn/>
      </div>
    </div>
  )
}

export default Options