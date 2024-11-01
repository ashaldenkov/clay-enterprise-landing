'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { SlideNextButton, SlidePrevButton} from './SwiperButtons';
import useWindowsize from '@/hooks/useWindowsize';

const CustomersSay = () => {
  const size = useWindowsize();

  let swiperContainerStyle = ''
  let slidesPerView = 1

  if (size?.width && size?.width >= 768 && size?.width && size?.width < 1024) {
    swiperContainerStyle = {padding: '96px 32px'};
    slidesPerView = 2;
  } else if (size?.width && size?.width >= 1024) {
    swiperContainerStyle = {padding: '64px 36px'};
    slidesPerView = 2.2;
  } else {
    swiperContainerStyle = {padding: '32px 20px'};
  }

  return (
    <div className='max-w-[1240px] mx-auto '>
        <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        style={swiperContainerStyle}
        wrapperClass='cursor-grab'
        >
          <div slot="container-start" className="md:flex md:justify-between md:items-end">
            <div className="mb-8 text-3xl md:text-4xl lg:text-5xl basis-[50%]">What our customers say about us...</div>
            <div className="mb-8 flex items-end gap-4 ">
              <SlidePrevButton/>
              <SlideNextButton/>
            </div>
          </div>

          <div>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#0382F7] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>23BG's innate multi-source data enrichment paired with customized GPT prompts offers powerful combination of AI and data orchestration for GTM teams.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66756a7232ecd63cd322883e_keith-jones.avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Keith Jones</div>
                          <div className='text-sm'>GTM Systems Lead, OpenAI</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66756b483018a6f31e1eb0b3_img-logo-icon-openai.svg" 
                      loading="lazy" 
                      width={48}
                      height={48}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#FDAD15] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>23BG should be an essential pillar of every company's GTM stack, enabling outbound built on the highest quality data foundation possible. Now you can automate hours of manual research so sales teams can focus on selling.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667c376cac4c1c2f449dc5c6_image%20(11).avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Stevie Case</div>
                          <div className='text-sm'>CRO, Vanta</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667c3793992d2925d4708be9_images.avif" 
                      loading="lazy" 
                      width={96}
                      height={37}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#EFF1F3] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>23BG is a game changer for marketing, data, and operations. We have tripled our enrichment rate with 23BG’s combination of data providers vs. our previous solution. We're using the best aggregate results across a waterfall of data sources, and implementing complex workflow logic even beyond enrichment—of course powered by AI. 23BG makes it easy to use AI for GTM initiatives, unlocking new workflows that were infeasible before.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1c28e0f601dece9badaf_image%20(7).avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Davide Grieco</div>
                          <div className='text-sm'>Director of Growth, Verkada</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d272717789803344f6ada_verkada-logo-vector-2022.avif" 
                      loading="lazy" 
                      width={86}
                      height={48}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#DD2C53] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>23BG saves us hours a week that we previously spent researching and vetting companies that applied to our startup program. Our auto-approval rate has jumped to ~40%—with no manual work needed.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1c0e213afc005ab64813_image%20(5).avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Josh Kim</div>
                          <div className='text-sm'>Head of Growth Programs, Notion</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1ca78e957d98b3405ade_661ce1b188dd92f7fc53b822_img_logo_notion.svg%20filllogo-hero.svg" 
                      loading="lazy" 
                      width={92}
                      height={32}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#0382F7] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>I love using and working with 23BG because its extensive customization options allow it to seamlessly integrate into various systems, making it an essential part of our tech stack. Their hands-on customer support ensures we build out flows in the most efficient way possible, enhancing our overall productivity and effectiveness.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667e8ad4ea54872465f31adf_1715045396139.avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>David Bulmer</div>
                          <div className='text-sm'>Sales Ops, Ramp</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667e8b996b1b3db06c2a02c4_Ramp_Business_Corporation_Logo.svg" 
                      loading="lazy" 
                      width={96}
                      height={26}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#3ECE82] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>Demand generation at scale needs to be programmatic, automated and high quality. 23BG helps us make that happen by cutting down manual work and maximizing human touches for millions of leads each month. 23BG helps us create accurate outreach that protects our brand as we outbound intelligently.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d6f5c980b275daf611636_image%20(17).avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Tommy Wang</div>
                          <div className='text-sm'>Chief Business Officer, ClickUp</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d6f7308f927ea95e08358_clickup%20(1).svg" 
                      loading="lazy" 
                      width={96}
                      height={25}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#EEE9DF] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>Not having 23BG would hugely reduce our ability to run good outbound campaigns. We wouldn’t be calling people as much, because it’s hard to get good phone numbers. We wouldn’t be emailing as much, because we’d be likely to bounce or go to spam. With 23BG, we have a reliable source of data enrichment and can run dynamic, multi-touch outreach sequences.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1c67c6fbffc261d65d23_image%20(8).avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Julien Reiman</div>
                          <div className='text-sm'>Head of Sales, Baseten</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1c9814fc5c9552203d0f_image%20(9).avif" 
                      loading="lazy" 
                      width={48}
                      height={48}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-[#5C15CC] rounded-lg h-[533px] md:h-[492px] lg:h-[455px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full rounded flex gap-4 flex-col justify-between p-4'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg" 
                      loading="lazy" 
                      width={17}
                      height={12}
                      alt="" 
                    />
                    <div>Scaling inefficient SDR work isn’t possible without an infinite flow of capital. 23BG helps automate mundane tasks like contact data enrichment, including pulling signals and triggers, so SDRs can focus their time on prioritized selling and spend their days more effectively. It evolves the SDR role and aligns it with better with marketing paths for more upward career momentum.</div>
                    <div className='mt-auto border-t border-black pt-8 flex justify-between items-start'>
                      <div className='flex gap-2 items-end'>
                        <Image 
                        src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1da0ad5a40f8dd7f1b5d_image%20(10).avif" 
                        loading="lazy" 
                        width={76}
                        height={76}
                        className='rounded border-2 border-black'
                        alt="" 
                        />
                        <div>
                          <div>Kris Rudegraap</div>
                          <div className='text-sm'>CEO, Sendoso</div>
                        </div>
                      </div>
                      <Image 
                      src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667bbaccc1fd0c0d87a9a1f7_sendoso-vector-logo.avif" 
                      loading="lazy" 
                      width={86}
                      height={48}
                      alt="" 
                      />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper> 
    </div>
  )
}

export default CustomersSay