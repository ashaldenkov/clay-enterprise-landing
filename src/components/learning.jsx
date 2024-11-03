'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { SlideNextButton, SlidePrevButton} from './SwiperButtons';
import useWindowsize from '@/hooks/useWindowsize';
import Link from 'next/link';

const Learning = () => {
  const size = useWindowsize();

  let secondSwiperContainerStyle = ''
  let secondSwiperSlidesPerView = 1

  if (size?.width && size?.width >= 768 && size?.width && size?.width < 1024) {
    secondSwiperContainerStyle = {padding: '96px 32px 128px 32px'};
    secondSwiperSlidesPerView = 2.2;
  } else if (size?.width && size?.width >= 1024) {
    secondSwiperContainerStyle = {padding: '64px 36px 96px 36px'};
    secondSwiperSlidesPerView = 3;
  } else {
    secondSwiperContainerStyle = {padding: '32px 20px 64px 20px'};
  }

  return (
    <div className='max-w-[1240px] mx-auto '>
        <Swiper
        spaceBetween={20}
        slidesPerView={secondSwiperSlidesPerView}
        style={secondSwiperContainerStyle}
        wrapperClass='cursor-grab'
        >

          <div slot="container-start" className="md:flex md:justify-between md:items-end">
            <div className='mb-8 basis-[50%]'>
              <div className="text-3xl md:text-4xl lg:text-5xl">Learn with our resources</div>
              <div className='mt-4 md:text-lg lg:text-xl'>Check out 23BG University, read our GTM blog, or try out our top templates to transform your growth ideas into outreach in minutes.</div>
            </div>
            <div className="mb-8 flex items-end gap-4 ">
              <SlidePrevButton/>
              <SlideNextButton/>
            </div>
          </div>
          <div>
            <SwiperSlide>
              <div className='w-full p-2 bg-borderBg border border-inactiveTabsBorder rounded-lg h-[397px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full border border-inactiveTabsBorder rounded flex flex-col justify-between p-4'>
                    <div className='rounded-lg mb-4 w-full h-[146px] overflow-hidden'>
                      <Image 
                        src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667aaafa589fa709b9e5af02_uni.avif" 
                        loading="lazy" 
                        width={800}
                        height={483}
                        className='object-cover'
                        alt="" 
                      />
                    </div>
                    <div className='mb-4 text-2xl'>23BG University</div>
                    <div className='mb-4'>Master 23BG in a few core lessons. Uplevel your data enrichment, craft better outbound messages, and book more meetings.</div>
                    <Link href='' className='mt-auto w-fit h-fit rounded flex items-center hover:opacity-80 group transition duration-300'>
                        <div className='text-nowrap text-sm'>Learn with 23BG</div>
                        <div className='w-5 h-5 ml-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>

                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-borderBg border border-inactiveTabsBorder rounded-lg h-[397px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full border border-inactiveTabsBorder rounded flex flex-col justify-between p-4'>
                    <div className='rounded-lg mb-4 w-full h-[146px] overflow-hidden'>
                      <Image 
                        src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66b1d628d8d2c551e76e54c1_img-automated-inbound.webp" 
                        loading="lazy" 
                        width={800}
                        height={639}
                        className='object-cover'
                        alt="" 
                      />
                    </div>
                    <div className='mb-4 text-2xl'>Go to market blog</div>
                    <div className='mb-4'>Our best content on growing your GTM motion, from outbound sales automation to AI lead generation.</div>
                    <Link href='' className='mt-auto w-fit h-fit rounded flex items-center hover:opacity-80 group transition duration-300'>
                        <div className='text-nowrap text-sm'>Explore our blog</div>
                        <div className='w-5 h-5 ml-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>

                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-borderBg border border-inactiveTabsBorder rounded-lg h-[397px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full border border-inactiveTabsBorder rounded flex flex-col justify-between p-4'>
                    <div className='rounded-lg mb-4 w-full h-[146px] overflow-hidden'>
                      <Image 
                        src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667aaad3cf4abed74dcdfc01_templates.webp" 
                        loading="lazy" 
                        width={800}
                        height={490}
                        className='object-cover'
                        alt="" 
                      />
                    </div>
                    <div className='mb-4 text-2xl'>Integrations</div>
                    <div className='mb-4'>Browse through all the integrations you can connect to 23BG in seconds and discover what you can do!</div>
                    <Link href='' className='mt-auto w-fit h-fit rounded flex items-center hover:opacity-80 group transition duration-300'>
                        <div className='text-nowrap text-sm'>Check integrations</div>
                        <div className='w-5 h-5 ml-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>

                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-borderBg border border-inactiveTabsBorder rounded-lg h-[397px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full border border-inactiveTabsBorder rounded flex flex-col justify-between p-4'>
                    <div className='rounded-lg mb-4 w-full h-[146px] overflow-hidden'>
                      <Image 
                        src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667aaad276b3f971b3cb3947_templat.webp" 
                        loading="lazy" 
                        width={800}
                        height={504}
                        className='object-cover'
                        alt="" 
                      />
                    </div>
                    <div className='mb-4 text-2xl'>Templates</div>
                    <div className='mb-4'>Power your outbound campaigns with our best templates.</div>
                    <Link href='' className='mt-auto w-fit h-fit rounded flex items-center hover:opacity-80 group transition duration-300'>
                        <div className='text-nowrap text-sm'>Visit 23BG templates</div>
                        <div className='w-5 h-5 ml-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>

                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-borderBg border border-inactiveTabsBorder rounded-lg h-[397px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full border border-inactiveTabsBorder rounded flex flex-col justify-between p-4'>
                    <div className='rounded-lg mb-4 w-full h-[146px] overflow-hidden'>
                      <Image 
                        src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ad04b00efbba934486bff_blog-grain.webp" 
                        loading="lazy" 
                        width={500}
                        height={312}
                        className='object-cover'
                        alt="" 
                      />
                    </div>
                    <div className='mb-4 text-2xl'>23BG Experts</div>
                    <div className='mb-4'>Hire a 23BG Enterprise expert or find a 23BG partner to help with your next project</div>
                    <Link href='' className='mt-auto w-fit h-fit rounded flex items-center hover:opacity-80 group transition duration-300'>
                        <div className='text-nowrap text-sm'>Explore 23BG experts</div>
                        <div className='w-5 h-5 ml-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>

                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full p-2 bg-borderBg border border-inactiveTabsBorder rounded-lg h-[397px] 
              transition-shadow duration-[400] lg:hover:shadow-[0_50px_80px_-40px_#0006]'>
                  <div className='bg-white w-full h-full border border-inactiveTabsBorder rounded flex flex-col justify-between p-4'>
                    <div className='rounded-lg mb-4 w-full h-[146px] overflow-hidden'>
                      <Image 
                        src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ad04bb0260b5fc271d7b3_chrome-grain.webp" 
                        loading="lazy" 
                        width={500}
                        height={312}
                        className='object-cover'
                        alt="" 
                      />
                    </div>
                    <div className='mb-4 text-2xl'>23BG&aposs Chrome extension</div>
                    <div className='mb-4'>23BG’s Chrome Extension makes it wicked easy to find leads almost anywhere on the internet</div>
                    <Link href='' className='mt-auto w-fit h-fit rounded flex items-center hover:opacity-80 group transition duration-300'>
                        <div className='text-nowrap text-sm'>Explore Chrome Extension</div>
                        <div className='w-5 h-5 ml-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>

                  </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>    
    </div>
  )
}

export default Learning