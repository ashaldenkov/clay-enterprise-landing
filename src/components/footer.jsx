'use client'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  return ( 
    <div className='bg-black text-white pb-[80px]'>
      {/* prefooter */}
      <div className='flex flex-col items-center justify-center py-[96px] md:py-[128px] px-4
      bg-[linear-gradient(to_bottom,rgba(0,0,0,0),black),url("https://cdn.prod.website-files.com/61477f2c24a826836f969afe/669941ab317c22673db64543_SHAPES-(1).webp")]
      bg-no-repeat bg-left-top lg:bg-top bg-cover'>
        <div className='text-[41px] mb-8 leading-tight md:text-6xl lg:text-7xl font-bold text-center'>Start molding your dream campaigns today</div>
        <div className='mb-4 text-center'>Start your 14-day Pro trial today. No credit card required.</div>
        <Link href='' className='w-fit px-4 py-2 bg-white text-black rounded flex items-center group transition duration-300 mb-8'>
          <div className='text-nowrap text-base font-bold'>Try it – it's free</div>
          <div className='w-5 h-5 ml-2 overflow-hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
              </svg>
          </div>
        </Link>
      </div>
      {/* footer */}
      <div className='md:flex min-[500px]:items-start my-[80px] mx-auto w-[90vw] lg:w-[85vw] max-w-[1200px]'>
        <div className='flex flex-col flex-1  justify-center items-center min-[500px]:items-start mb-8 px-4'>
          <div className='mb-4 md:w-full'>Product</div>
          <ul>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Login
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              University
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Integrations
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Pricing
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Changelog
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center min-[500px]:items-start mb-8 px-4'>
          <div className='mb-4 md:w-full'>Blog</div>
          <ul>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              AI for Sales Prospecting
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Why good CRM data matters
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Google Maps lead generation in 5 easy steps
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Outbound Sales Automation
              </Link>
            </li>
            <li className='pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              AI Lead Generation
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center min-[500px]:items-start mb-8 px-4'>
          <div className='mb-4 md:w-full'>Tools</div>
          <ul>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Email Finder
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Headcount Finder
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Credits Calculator
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Chrome extension
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Lookup WHOIS Info
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              CPM Calculator
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Margin Calculator
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Headcount Directory
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Glossary
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Dossier
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Job Board
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center min-[500px]:items-start mb-8 px-4'>
          <div className='mb-4 md:w-full'>Support</div>
          <ul>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Send us an email
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Join Slack
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              FAQ
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Status
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center min-[500px]:items-start mb-8 px-4'>
          <div className='mb-4 md:w-full'>Company</div>
          <ul>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Customer Stories
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Wall of Love
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Careers
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Creators Program
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Integrate with 23BG
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center min-[500px]:items-start mb-8 px-4'>
          <div className='mb-4 md:w-full'>Legal</div>
          <ul>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Privacy Policy
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Terms of Service
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Do not sell my data
              </Link>
            </li>
            <li className=' pt-1 pb-3'>
              <Link href='' className='text-link hover:text-white hover:underline block w-full text-center min-[500px]:text-start'>
              Cookie preferences
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div className='flex flex-col items-center min-[500px]:items-start mb-6 min-[500px]:items-start min-[500px]:px-[5vw] max-w-[1200px]'>
        <div className='flex items-center'>
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D0BAQFnMo8sYJdPJA/company-logo_200_200/company-logo_200_200/0/1702550996404?e=1738195200&v=beta&t=NoOq98gIWIhBFRdARnBDtMncY1xVGo5_zmRSCZsA_50"
            width={64}
            height={64}
            alt="Logo"
            className='h-[50px] w-[50px] mr-2'
            />
            <h1 className='text-xl'>23BG</h1>
        </div>
        <div className='text-center font-normal mt-4 min-[500px]:text-start'>© 23BG 2024 / Uplevel your data enrichment. Scale personalized outreach.</div>
      </div>
    </div>
  )
}

export default Footer