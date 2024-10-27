import Image from 'next/image'
import React from 'react'
import ContactBtn from './contactBtn'
import TeamList from './teamList'

const Intro = () => {
  return (
    <div className='pt-[64px] pb-[48px] md:pb-[64px] lg:pt-[128px] lg:pb-[112px] bg-introBg overflow-hidden'>
      <div className='max-w-[1240px] mx-auto px-5 md:px-9 lg:px-6'>
        <div className='flex items-center h-[28px] mb-8'>
          <div className='text-xs mr-5 text-introTextColor bg-introTextBg border border-introTextBorder rounded px-3 py-1'>Enterprise</div>
          <div className='w-full border-t-2 border-dashed border-black opacity-25 ml-5'></div>
        </div>

        <div className='lg:flex lg:justify-between'>
          <div className='text-4xl md:text-6xl lg:text-7xl md:max-w-[80%] font-semibold lg:basis-7/12'>The data foundation for any GTM workflow</div>
          <div className='relative max-lg:mt-2 lg:basis-1/3 flex flex-col justify-end items-start'>
            <div className='mb-4 max-w-[90%] md:max-w-[60%] lg:max-w-[90%] md:text-xl'>Help your operations team power personalized outreach campaigns — with no manual effort.</div>
            <ContactBtn/>
            <div className='absolute translate-y-[calc(50%+2px)] translate-x-[50px] w-[90vw] md:w-[76vw] lg:w-[40vw] pointer-events-none'>
                <Image 
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord.png" 
                loading="lazy" 
                width={1600}
                height={444}
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 76vw, 55vw" 
                srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord-p-500.png 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord-p-800.png 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord-p-1080.png 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord.png 1600w" 
                alt="" 
                />
            </div>
          </div>
        </div>
        <div className='mt-[96px] sm:mt-[128px]'>
          <div className='uppercase text-xs font-bold mb-6'>trusted by 100,000 leading gtm teams:</div>
          <TeamList/>
        </div>
      </div>
    </div>
  )
}

export default Intro


