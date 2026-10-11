import Image from 'next/image'
import React from 'react'
import ContactBtn from './contactBtn'
import TeamList from './teamList'

const Intro = () => {
  return (
    <div className="overflow-hidden bg-introBg pt-[64px] pb-[48px] md:pb-[64px] lg:pt-[128px] lg:pb-[112px]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-9 lg:px-6">
        <div className="mb-8 flex h-[28px] items-center">
          <div className="mr-5 rounded-sm border border-introTextBorder bg-introTextBg px-3 py-1 text-xs text-introTextColor">
            Enterprise
          </div>
          <div className="ml-5 w-full border-t-2 border-dashed border-black opacity-25"></div>
        </div>

        <div className="lg:flex lg:justify-between">
          <div className="text-4xl font-semibold md:max-w-[80%] md:text-6xl lg:basis-7/12 lg:text-7xl">
            The data foundation for any GTM workflow
          </div>
          <div className="relative flex flex-col items-start justify-end max-lg:mt-2 lg:basis-1/3">
            <div className="mb-4 max-w-[90%] md:max-w-[60%] md:text-xl lg:max-w-[90%]">
              Help your operations team power personalized outreach campaigns —
              with no manual effort.
            </div>
            <ContactBtn />
            <div className="pointer-events-none absolute w-[90vw] translate-x-[50px] translate-y-[calc(50%+2px)] md:w-[76vw] lg:w-[40vw]">
              <Image
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord.png"
                width={1600}
                height={444}
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 76vw, 55vw"
                srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord-p-500.png 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord-p-800.png 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord-p-1080.png 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66faaa52ed96045510ba6b81_img-claymation-chord.png 1600w"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[96px] sm:mt-[128px]">
          <div className="mb-6 text-xs font-bold uppercase">
            trusted by 100,000 leading gtm teams:
          </div>
          <TeamList />
        </div>
      </div>
    </div>
  )
}

export default Intro
