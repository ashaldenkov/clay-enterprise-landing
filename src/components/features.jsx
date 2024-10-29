'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ContactBtn from './contactBtn';
import useDelayUnmount from '@/hooks/useDelayUnmount'

const Features = () => {
    const [openTab, setOpenTab] = useState('contactInformation');
    const [useCaseTab, setUseCaseTab] = useState('inbound');

  return (
    <div className='max-w-[1240px] mx-auto px-5 md:px-9 lg:px-6'>
        {/* feature */}
          {/* pc tabs*/}
        <div className="hidden lg:flex lg:items-center">
          <div className='h-[550px] basis-1/2 shrink-0 flex justify-center'>
            { openTab === 'contactInformation' && (
              <div className='w-fit animate-FadeIn h-[550px] rounded flex items-center justify-center overflow-hidden bg-[#f8cc65]'>
                <Image 
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c6fe5e3e6ba2b534ed974_1-contact-information-updated.webp" 
                loading="lazy" 
                width={550}
                height={550}
                sizes='(max-width: 991px) 100vw, 36vw'
                srcSet='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c6fe5e3e6ba2b534ed974_1-contact-information-updated-p-500.png 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c6fe5e3e6ba2b534ed974_1-contact-information-updated-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c6fe5e3e6ba2b534ed974_1-contact-information-updated-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c6fe5e3e6ba2b534ed974_1-contact-information-updated-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c6fe5e3e6ba2b534ed974_1-contact-information-updated.webp 2000w'
                className=''
                alt="" 
                />
              </div>
            )}
            { openTab === 'intentData' && (
            <div className='h-[550px] animate-FadeIn rounded flex items-center justify-center overflow-hidden bg-[#038ff7]'>
              <Image 
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818c24902a0664a415e_2_intent_data.webp" 
              loading="lazy" 
              width={550}
              height={550}
              sizes="100vw" 
              srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818c24902a0664a415e_2_intent_data-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818c24902a0664a415e_2_intent_data-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818c24902a0664a415e_2_intent_data-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818c24902a0664a415e_2_intent_data-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818c24902a0664a415e_2_intent_data.webp 2000w"
              alt="" 
              />
            </div>
            )}
            { openTab === 'firmographic' && (
            <div className='h-full animate-FadeIn rounded flex items-center justify-center overflow-hidden bg-[#a789fe]'>
              <Image 
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818682e595eca4f6425_3_firmographic.webp" 
              loading="lazy" 
              width={526}
              height={526}
              sizes="100vw" 
              srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818682e595eca4f6425_3_firmographic-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818682e595eca4f6425_3_firmographic-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818682e595eca4f6425_3_firmographic-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818682e595eca4f6425_3_firmographic-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0818682e595eca4f6425_3_firmographic.webp 2000w"
              className='h-full object-cover'
              alt="" 
              />
            </div>
            )}
            { openTab === 'anyData' && (
            <div className='w-full animate-FadeIn h-full rounded flex flex-col gap-2 items-center bg-[#eff1f3] overflow-y-scroll bg-[length:220px] bg-no-repeat bg-right-bottom	
            bg-scroll bg-[url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/65aa9c8aaa5008abcaffbe28_img-claymation-arrow.png")]'>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>When did this company last raise money?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does the company host videos on its website homepage?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Who are the investors of this company?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does this company allow remote work?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does the company mention CSV imports on their site?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Has this company ever acquired another company?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Who is the hiring manager for this open role?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does this company have a podcast?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>What titles does this company sell to?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Who are happy customers listed as case studies?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>What is the average pricing listed on their site?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>What was the last podcast their CEO was on?</div>
                  </div>
                </div>
            </div>
            )}

          </div>
          <div className="mb-6 lg:gap-8 basis-1/2 ml-[10%]">
              <button className={`w-full pt-6 pb-4 pr-8 text-left border-b border-[#d8d8d8]` +
                  (openTab === 'contactInformation' ? " text-black" : " text-[#757575] hover:text-[#038ff7]")}
                  onClick={e => {
                  e.preventDefault();
                  setOpenTab('contactInformation');
                  }}
              >
                <div className='text-xl'>Contact information</div>
              { openTab === 'contactInformation' && (
                <div className='mt-4 animate-FadeIn'>Search dozens of providers at once to get the best coverage on work email, mobile numbers, and more.</div>
              )}
              </button>
              <button className={`w-full pt-6 pb-4 pr-8 text-left border-b border-[#d8d8d8]` +
                  (openTab === 'intentData' ? " text-black" : " text-[#757575] hover:text-[#038ff7]")}
                  onClick={e => {
                  e.preventDefault();
                  setOpenTab('intentData');
                  }}
              >
                <div className='text-xl'>Intent data</div>
                { openTab === 'intentData' && (
                  <div className='mt-4 animate-FadeIn'>Continuously monitor buying signals across social media and the web and be alerted for key events like job changes and major news.</div>
                )}
              </button>
              <button className={`w-full pt-6 pb-4 pr-8 text-left border-b border-[#d8d8d8]` +
                  (openTab === 'firmographic' ? " text-black" : " text-[#757575] hover:text-[#038ff7]")}
                  onClick={e => {
                  e.preventDefault();
                  setOpenTab('firmographic');
                  }}
              >
                <div className='text-xl'>Firmographic data</div>
                { openTab === 'firmographic' && (
                  <div className='mt-4 animate-FadeIn'>Get the best coverage on standard firmographics and technographics like employee count by role and location, plus custom data points that our agents can find for your unique business.</div>
                )}
              </button>
              <button className={`w-full pt-6 pb-4 pr-8 text-left border-b border-[#d8d8d8]` +
                  (openTab === 'anyData' ? " text-black" : " text-[#757575] hover:text-[#038ff7]")}
                  onClick={e => {
                  e.preventDefault();
                  setOpenTab('anyData');
                  }}
              >
                <div className='text-xl'>Any data point on the internet</div>
                { openTab === 'anyData' && (
                  <div className='mt-4 animate-FadeIn'>Find most data points you can imagine with our AI research agent. That includes categorizing companies as B2B vs. B2C, checking SOC-II compliance, finding the number of franchise locations of a restaurant, etc. See examples of questions that are easy to ask with Claygent, our AI web scraper.</div>
                )}
              </button>
          </div>
        </div>
          {/* mobile flex*/}
        <div className='lg:hidden'>
          <div className='mt-8'>
            <div className='h-[230px] mb-8 min-[500px]:h-[400px] md:h-500px flex items-center justify-center overflow-hidden bg-no-repeat bg-right bg-auto
            bg-[url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/65e5d9bcf1b8b39167d7d74a_claymation-green.webp"),linear-gradient(to_bottom,rgba(4,126,74,1),rgba(4,126,74,1))]'>
              <Image 
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c7056ab522b4497a01523_1-contact-information-tablet.webp" 
              loading="lazy" 
              width={500}
              height={500}
              sizes="(max-width: 479px) 83vw, (max-width: 767px) 84vw, (max-width: 991px) 526px, 100vw" 
              srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c7056ab522b4497a01523_1-contact-information-tablet-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c7056ab522b4497a01523_1-contact-information-tablet-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c7056ab522b4497a01523_1-contact-information-tablet-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c7056ab522b4497a01523_1-contact-information-tablet-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667c7056ab522b4497a01523_1-contact-information-tablet.webp 2000w" 
              alt="" 
              />
            </div>
            <div>
              <div className='text-xl'>Contact information</div>
              <p className='mt-4'>Search dozens of providers at once to get the best coverage on work email, mobile numbers, and more.</p>
            </div>
          </div>
          <div className='mt-8'>
            <div className='h-[230px] mb-8 min-[500px]:h-[400px] md:h-500px flex items-center justify-center overflow-hidden bg-no-repeat bg-[left_-10px_center] bg-auto
            bg-[url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66591051c3654b176d0fec29_blue-bg_1x.webp")]'>
              <Image 
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c33e0f11182606ad96b_2_intent_data-tablet.webp" 
              loading="lazy" 
              width={500}
              height={500}
              sizes="(max-width: 479px) 83vw, (max-width: 767px) 84vw, (max-width: 991px) 526px, 100vw" 
              srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c33e0f11182606ad96b_2_intent_data-tablet-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c33e0f11182606ad96b_2_intent_data-tablet-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c33e0f11182606ad96b_2_intent_data-tablet-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c33e0f11182606ad96b_2_intent_data-tablet-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c33e0f11182606ad96b_2_intent_data-tablet.webp 2000w" 
              alt="" 
              />
            </div>
            <div>
              <div className='text-xl'>Intent data</div>
              <p className='mt-4'>Continuously monitor buying signals across social media and the web and be alerted for key events like job changes and major news.</p>
            </div>
          </div>
          <div className='mt-8'>
            <div className='h-[230px] mb-8 min-[500px]:h-[400px] md:h-500px flex items-center justify-center overflow-hidden bg-no-repeat bg-right bg-auto
            bg-[linear-gradient(to_bottom,#9170e6,#9170e6)]'>
              <Image 
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c330b0ee6ffac47decc_3_firmographic-tablet.webp" 
              loading="lazy" 
              width={526}
              height={526}
              sizes="(max-width: 479px) 83vw, (max-width: 767px) 84vw, (max-width: 991px) 526px, 100vw" 
              srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c330b0ee6ffac47decc_3_firmographic-tablet-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c330b0ee6ffac47decc_3_firmographic-tablet-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c330b0ee6ffac47decc_3_firmographic-tablet-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c330b0ee6ffac47decc_3_firmographic-tablet-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b0c330b0ee6ffac47decc_3_firmographic-tablet.webp 2000w"
              alt="" 
              />
            </div>
            <div>
              <div className='text-xl'>Firmographic data</div>
              <p className='mt-4'>Get the best coverage on standard firmographics and technographics like employee count by role and location, plus custom data points that our agents can find for your unique business.</p>
            </div>
          </div>
          <div className='mt-8'>
            <div className='h-[230px] mb-8 min-[500px]:h-[400px] md:h-500px  overflow-hidden
            bg-[#eff1f3] overflow-y-scroll relative'>
              <Image 
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/65aa9c8aaa5008abcaffbe28_img-claymation-arrow.png" 
              loading="lazy" 
              width={500}
              height={666}
              className='w-[150px] absolute right-0 bottom-0'
              alt="" 
              />
              <div className='-translate-y-[20px] flex flex-col gap-2 items-center justify-center h-[768px]'>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>When did this company last raise money?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does the company host videos on its website homepage?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Who are the investors of this company?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does this company allow remote work?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does the company mention CSV imports on their site?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Has this company ever acquired another company?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Who is the hiring manager for this open role?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Does this company have a podcast?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>What titles does this company sell to?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>Who are happy customers listed as case studies?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>What is the average pricing listed on their site?</div>
                  </div>
                </div>
                <div className='bg-listBg w-fit border border-borderDrop rounded-2xl p-1'> 
                  <div className='h-[50px] bg-white border border-borderDrop rounded-xl flex items-center shadow-[0_17px_20px_-10px_#0003]'>
                    <div className='text-xs px-3'>What was the last podcast their CEO was on?</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='text-xl'>Any data point on the internet</div>
              <p className='mt-4'>Find most data points you can imagine with our AI research agent. That includes categorizing companies as B2B vs. B2C, checking SOC-II compliance, finding the number of franchise locations of a restaurant, etc. See examples of questions that are easy to ask with Claygent, our AI web scraper.</p>
            </div>
          </div>
        </div>
        {/* features */}
        <div className='mt-8 grid grid-cols-1 grid-rows-4 min-[500px]:grid-cols-2 min-[500px]:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-5 
        pb-[48px] md:pb-[64px] lg:pb-[96px]'>
            <div className='border border-gray p-4'>
            <Image
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b3488cb96c15de1b10318_image%20407.png"
                width={71}
                height={70}
                alt=""
                className='h-[32px] w-[32px]'
            />
            <div className='mt-4 text-xl'>Flexibility for any campaign</div>
            <div className='mt-4'>Program our core components (account/lead lists, data enrichment, and messaging) into end-to-end campaigns for any outreach use case.</div>
            </div>
            <div className='border border-gray p-4'>
            <Image
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c286e983c04a8f9800b8_3d-icon-blog.avif"
                width={71}
                height={70}
                alt=""
                className='h-[32px] w-[32px]'
            />
            <div className='mt-4 text-xl'>Best data coverage</div>
            <div className='mt-4'>Clay consolidates 75+ major enrichment tools into one credit-based marketplace. Our waterfall enrichment feature helps you query multiple tools at once to find any data point.</div>
            </div>
            <div className='border border-gray p-4'>
            <Image
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667b348158420e10a2d5b189_image%20406.png"
                width={71}
                height={70}
                alt=""
                className='h-[32px] w-[32px]'
            />
            <div className='mt-4 text-xl'>One data cleanroom</div>
            <div className='mt-4'>Use Clay to access any enrichment tool and integrate with your CRM and email sending tool. Never deal with multiple contracts or points of security risk again.</div>
            </div>
            <div className='border border-gray p-4'>
            <Image
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abd0cad0edd25c3a333_3d-icon-glass.avif"
                width={71}
                height={70}
                alt=""
                className='h-[32px] w-[32px]'
            />
            <div className='mt-4 text-xl'>Powerful AI research agent</div>
            <div className='mt-4'>Automate complex, creative, and manual SDR research with our AI research agent—just provide a list of domains and ask any question.</div>
            </div>
        </div>
        {/* inbound/outbound tabs */}
        <div className='py-[48px] md:py-[64px] lg:py-[96px]'>
          <div className='mb-8'>
            <div className='mb-2.5 md:mb-4 text-center text-3xl md:text-4xl lg:text-5xl'>Program our components for any outreach use case</div>
            <div className='md:text-xl text-center'>Once your data is solid, use it with our AI message writer to help generate personalized copy for any campaign: inbound, outbound, expansion, retention.</div>
          </div>

          <div className='mt-[48px]'>
            <div className="lg:flex mb-6 lg:gap-8">
              <button
                className={`h-[50px] max-lg:mb-4 rounded border border-inactiveTabsBorder w-full transition-all duration-300 
                  hover:border-gray-300 hover:text-black` +
                  (useCaseTab === 'inbound' ? " bg-borderBg" : " bg-white text-featureGrey hover:bg-inactiveTabsBorder")}
                  onClick={e => {
                  e.preventDefault();
                  setUseCaseTab('inbound');
                  }}
              >Inbound
              </button>
              <button
                className={`h-[50px] rounded border border-inactiveTabsBorder w-full transition-all duration-300 
                  hover:border-gray-300 hover:text-black` +
                  (useCaseTab === 'outbound' ? " bg-borderBg" : " bg-white text-featureGrey hover:bg-inactiveTabsBorder")}
                  onClick={e => {
                  e.preventDefault();
                  setUseCaseTab('outbound');
                  }}
              >Outbound
              </button>
            </div>

            <div>
              <div className={`${useCaseTab === 'inbound' ? "block lg:flex lg:gap-8 animate-FadeIn" : "hidden animate-FadeOut"}`}>
                  <div className='mb-8 w-full p-6 md:p-10 lg:p-[80px] border border-gray-300 rounded flex flex-col lg:basis-1/2'>
                      <div className='text-2xl md:text-3xl md:text-[32px]'>Enrich & filter your inbound leads to reach the best prospects</div>
                      <p className='mt-4 mb-6 leading-5'>When you have thousands of inbound leads, you need to quickly prioritize the best fits for your team. Enrich leads with contact info, firmographics, and more — then use AI to draft the perfect outreach. Get to your leads faster.</p>
                      <ContactBtn/>
                  </div>

                  <div className='mb-8 lg:basis-1/2 aspect-square flex items-center justify-center overflow-hidden bg-no-repeat bg-[left_-10px] bg-auto
                  bg-[url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66591051c3654b176d0fec29_blue-bg_1x.webp")]'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound.webp" 
                      loading="lazy" 
                      width={800}
                      height={375}
                      sizes="(max-width: 479px) 71vw, (max-width: 767px) 66vw, (max-width: 991px) 71vw, 41vw" 
                      srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound-p-2000.webp 2000w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac73de112f572b1617117_table-inbound.webp 2560w"
                      alt="" 
                      className='p-2 w-[90%] border rounded-xl border-inactiveTabsBorder bg-[rgba(255,255,255,0.3)]'
                    />
                  </div>
              </div>
              <div className={`${useCaseTab === 'outbound' ? "block lg:flex lg:gap-8 animate-FadeIn" : "hidden animate-FadeOut"}`}>
                  <div className='mb-8 w-full p-6 md:p-10 lg:p-[80px] border border-gray-300 rounded flex flex-col lg:basis-1/2'>
                      <div className='text-2xl md:text-3xl md:text-[32px]'>Build lists, enrich, and message leads in seconds</div>
                      <p className='mt-4 mb-6 leading-5'>Are you targeting large customers? Use a white glove approach and leverage Clay to keep your CRM updated and automate the prospecting part of going after enterprises.</p>
                      <ContactBtn/>
                  </div>

                  <div className='mb-8 lg:basis-1/2 aspect-square flex items-center justify-center overflow-hidden bg-no-repeat bg-[left_-10px_center] bg-cover
                  bg-[url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6659103311a644d4b776fc2d_pink-bg_1x.webp")]
                  lg: bg-[url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66591022c3654b176d0fbd4c_yellow_bg_1x.webp")]'>
                    <Image 
                      src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound.webp" 
                      loading="lazy" 
                      width={800}
                      height={375}
                      sizes="(max-width: 479px) 71vw, (max-width: 767px) 66vw, (max-width: 991px) 71vw, 41vw" 
                      srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound-p-500.webp 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound-p-800.webp 800w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound-p-1080.webp 1080w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound-p-1600.webp 1600w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound-p-2000.webp 2000w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ac773196275007a83447f_table-outbound.webp 2560w"
                      alt="" 
                      className='p-2 w-[90%] border rounded-xl border-inactiveTabsBorder bg-[rgba(255,255,255,0.3)]'
                    />
                  </div>
              </div>
            </div>

          </div>
        </div>
        {/* salesforce */}
        <div className='py-[16px] md:py-[32px] lg:py-[64px] lg:flex lg:gap-8'>
          <Image 
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/670dc40ac05d9be676922330_SDR-package.avif" 
            loading="lazy" 
            width={500}
            height={500}
            sizes="(max-width: 991px) 90vw, 45vw" 
            srcSet="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/670dc40ac05d9be676922330_SDR-package-p-500.avif 500w, https://cdn.prod.website-files.com/61477f2c24a826836f969afe/670dc40ac05d9be676922330_SDR-package.avif 1281w" 
            alt="" 
            className='mb-8 max-lg:w-full h-fit lg:basis-1/2'
          />
          <div className='mb-8 w-full p-6 md:p-10 lg:p-[80px] border border-gray-200 rounded flex flex-col lg:basis-1/2'>
              <div className='mb-3 lg:mb-6 py px-3 border border-purple-300 text-purple-700 text-xs leading-6 rounded bg-purple-200 w-fit'>Salesforce package</div>
              <div className='text-2xl md:text-3xl md:text-[32px]'>Automate prospecting and data enrichment—without leaving Salesforce</div>
              <p className='my-6'>Grow pipeline faster by helping sellers find, enrich, and draft messages to any contact on-demand—without ever leaving Salesforce.</p>
              <Link href='' className='w-fit px-4 py-2 rounded border border-black flex items-center hover:opacity-80 group transition duration-300'>
                <div className='text-wrap text-base'>Learn more about our Salesforce package</div>
                <div className='w-5 h-5 ml-2 overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                    </svg>
                </div>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Features