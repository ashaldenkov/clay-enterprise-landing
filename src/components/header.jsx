'use client'
import Image from 'next/image'
import DropdownArrow from '@/images/dropdown-arrow.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import useDelayUnmount from '@/hooks/useDelayUnmount'
import BurgerMenu from './burgerMenu';


const Header = ({ setScrollBlock }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const showDiv = useDelayUnmount(hamburgerOpen,250);


  // scroll lock on burger open
  useEffect(() => {
    if (hamburgerOpen) {
      setScrollBlock(true)
    } else {
      setScrollBlock(false)
    }
  },[hamburgerOpen])

  const genericHamburgerLine = `h-[2px] w-4 my-[2px] bg-black transition ease transform duration-300`;

  return (
    <div>
        <div className='h-[76px] lg:h-[64px] bg-white border-b border-gray flex justify-between items-center px-2 lg:px-6 text-sm lg:fixed z-20 w-full relative'>
          <Link href='' className='flex items-center'>
            <Image
            src="https://media.licdn.com/dms/image/v2/D4D0BAQFnMo8sYJdPJA/company-logo_200_200/company-logo_200_200/0/1702550996404?e=1738195200&v=beta&t=NoOq98gIWIhBFRdARnBDtMncY1xVGo5_zmRSCZsA_50"
            width={64}
            height={64}
            alt="Logo"
            className='h-[50px] w-[50px]'
            />
            <h1 className='text-xl'>23BG</h1>
          </Link>

          <div className='flex items-center max-lg:hidden h-full'>
              {/* PRODUCT */}
            <div className='pl-4 pr-2.5 flex h-full items-center cursor-pointer group transition duration-300'>
              <div>Product</div>
              <Image
              src={DropdownArrow}
              className='w-6 ml-1 h-5 w-5 group-hover:rotate-180 transition-all duration-200'
              alt=""
              />
              <div className='hidden z-10 group-hover:block absolute top-[63px] right-1/2 translate-x-1/2 cursor-default'>
                <div className='border border-borderDrop bg-borderBg p-[6.4px] mt-[16px]'>
                  <div className='border border-borderDrop bg-white w-full h-full flex'>

                    <div className='w-[320px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>RECURRING WORKFLOWS</div>
                      <ul className='bg-white'>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-y border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285a5ca1580d2949393_3d-icon-data.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>CRM enrichment & hygiene</div>
                              <div className='text-dropdownSubhead'>Connect to and auto-update your CRM as a source of truth</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2850a2625d36b8b8f1c_3d-icon-list.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>TAM sourcing</div>
                              <div className='text-dropdownSubhead'>Build targeted lead lists using 10+ sources and AI</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285ea54e9d33bf44411_3d-icon-outbound.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Automated inbound</div>
                              <div className='text-dropdownSubhead'>Connect to your webforms and auto-enrich and score leads</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2857bfce1dfaeba160e_3d-icon-inbound.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Automated outbound</div>
                              <div className='text-dropdownSubhead'>Build, enrich, score, and message leads in seconds</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px]'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6708597ea79851051f846ca0_Claymation.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Intent data</div>
                              <div className='text-dropdownSubhead'>Track job changes, new hires, promotions, and more</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='border-l border-borderClr w-[320px]'>
                    <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>FEATURES</div>
                      <ul className='bg-white'>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-y border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc88fb18290e684672_3d-icon-wire.avif'
                              width={300}
                              height={300}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Integrations</div>
                              <div className='text-dropdownSubhead'>Access 50+ databases to get the most comprehensive coverage of information</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abca946b59ed38891ca_3d-icon-wave.avif'
                              width={300}
                              height={300}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Multi-provider data enrichment</div>
                              <div className='text-dropdownSubhead'>Search multiple providers sequentially to maximize data quality and coverage</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abcbf6d348e6ec658f1_3d-icon-cirlcle.avif'
                              width={300}
                              height={300}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>AI research agent</div>
                              <div className='text-dropdownSubhead'>Ask our agent to search websites and find all the answer to your questions</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abd0cad0edd25c3a333_3d-icon-glass.avif'
                              width={300}
                              height={300}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Personalized copywriting</div>
                              <div className='text-dropdownSubhead'>Use our AI email builder to write & send personalized emails that convert</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='border-l border-borderClr w-[240px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>QUICK LINKS</div>
                      <ul className='bg-socials h-[480px]'>
                        <li className='border-y border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[46px] px-4'>
                          Templates
                          </Link>
                        </li>
                        <li className='border-b border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px] px-4'>
                          Chrome Extension
                          </Link>
                        </li>
                        <li className='border-b border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px] px-4'>
                          Changelog
                          </Link>
                        </li>
                        <li className='border-b border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px] px-4'>
                          Security
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              {/* SOLUTIONS */}
            <div className='pl-4 pr-2.5 flex h-full items-center cursor-pointer group transition duration-300'>
              <div>Solutions</div>
              <Image
              src={DropdownArrow}
              className='w-6 ml-1 h-5 w-5 group-hover:rotate-180 transition-all duration-200'
              alt=""
              />
              <div className='hidden z-10 group-hover:block absolute top-[63px] right-1/2 translate-x-1/2 cursor-default'>
                <div className='border border-borderDrop bg-borderBg p-[6.4px] mt-[16px]'>
                  <div className='border border-borderDrop bg-white w-full h-full flex'>

                    <div className='w-[320px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>23BG FOR</div>
                      <ul className='bg-white'>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-y border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7baf0d1ed31e280380_RevOps.avif'
                              width={105}
                              height={106}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>RevOps</div>
                              <div className='text-dropdownSubhead'>Prospect, enrich, and clean your CRM automatically</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7bbebf97135bedbe28_SDR.avif'
                              width={105}
                              height={106}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>SDRs</div>
                              <div className='text-dropdownSubhead'>Grow pipeline faster by targeting and enriching your prospects in seconds</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[96px]'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cf1431caa39bc74b_3d-icon-integrations.avif'
                              width={105}
                              height={106}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Enterprise</div>
                              <div className='text-dropdownSubhead'>Build the data foundation for any GTM workflow</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='border-l border-borderClr w-[576px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>CUSTOMER SOLUTIONS</div>
                      <ul className='bg-white w-full h-[288px] flex'>
                        <li className='border-t border-r border-borderClr hover:bg-gray-100 group/item w-1/2'>
                        <Link href='' className='block p-4 h-full flex flex-col justify-between'>
                          <div className='w-full'>How Verkada’s growth team uses 23BG to launch targeted ABM campaigns across LinkedIn, email, and direct mail</div>
                            <div className='overflow-hidden rounded w-full h-[180px] relative'>
                              <Image
                                src='https://cdn.prod.website-files.com/61702af2e3966e09c4101538/670175f515ea5801d59eeb45_CSV.avif'
                                width={744}
                                height={528}
                                className='scale-[1] group-hover/item:scale-[1.2] transition-all duration-500'
                                alt=""
                                />
                            </div>
                          </Link>
                        </li>
                        <li className='border-t border-borderClr hover:bg-gray-100 group/item w-1/2'>
                          <Link href='' className='block p-4 h-full flex flex-col justify-between'>
                            <div className='w-full'>How Anthropic uses 23BG to 3x their enrichment coverage—with no manual work </div>
                            <div className='overflow-hidden rounded w-full h-[180px] relative'>
                              <Image
                                src='https://cdn.prod.website-files.com/61702af2e3966e09c4101538/67017619c252f8cb382976c0_CS.avif'
                                width={744}
                                height={528}
                                className='scale-[1] group-hover/item:scale-[1.2] transition-all duration-500'
                                alt=""
                                />
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* RESOURCES */}
            <div className='pl-4 pr-2.5 flex h-full items-center cursor-pointer group transition duration-300'>
              <div>Resources</div>
              <Image
              src={DropdownArrow}
              className='w-6 ml-1 h-5 w-5 group-hover:rotate-180 transition-all duration-200'
              alt=""
              />
              <div className='hidden z-10 group-hover:block absolute top-[63px] right-1/2 translate-x-1/2 cursor-default'>
                <div className='border border-borderDrop bg-borderBg p-[6.4px] mt-[16px]'>
                  <div className='border border-borderDrop bg-white w-full h-full flex'>

                    <div className='max-[1300px]:w-[480px] w-[640px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>RECURRING WORKFLOWS</div>
                      <ul className='bg-white flex flex-wrap'>
                        <li className='max-[1300px]:w-[240px] w-[320px] hover:bg-gray-100 group/item h-[96px] border-y border-r border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2862e602277a94d9090_3d-icon-university.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>University</div>
                              <div className='text-dropdownSubhead text-xs'>Learn how to use 23BG with our best resources</div>
                            </div>
                          </Link>
                        </li>
                        <li className='max-[1300px]:w-[240px] w-[320px] hover:bg-gray-100 group/item h-[96px] border-y border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc6de317f059ab70ef_3d-icon-folders.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Templates</div>
                              <div className='text-dropdownSubhead text-xs'>Jumpstart your outbound campaigns with our top templates</div>
                            </div>
                          </Link>
                        </li>
                        <li className='max-[1300px]:w-[240px] w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-r border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c6065558289a2359d904_3d-icon-start.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Experts</div>
                              <div className='text-dropdownSubhead text-xs'>Need help scaling your outbound? Hire a 23BG expert</div>
                            </div>
                          </Link>
                        </li>
                        <li className='max-[1300px]:w-[240px] w-[320px] hover:bg-gray-100 group/item h-[96px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c286e983c04a8f9800b8_3d-icon-blog.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Blog</div>
                              <div className='text-dropdownSubhead text-xs'>Read our best guides for outbound, from email setup to AI copywriting</div>
                            </div>
                          </Link>
                        </li>
                        <li className='max-[1300px]:w-[240px] w-[320px] hover:bg-gray-100 group/item h-[96px] border-r'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66eb4ab83112047640fee011_claybooks.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>23BGBooks</div>
                              <div className='text-dropdownSubhead text-xs'>Build powerful workflows with 23BG and other tools</div>
                            </div>
                          </Link>
                        </li>
                        <li className='max-[1300px]:w-[240px] w-[320px] hover:bg-gray-100 group/item h-[96px]'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c28592e0cc2fd58c5bd0_3d-icon-slack.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Slack community</div>
                              <div className='text-dropdownSubhead text-xs'>Join our Slack for live support and a community of 15K+ sales experts!</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='max-[1300px]:w-[240px] border-l border-borderClr w-[320px]'>
                    <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>ADDITIONAL HELP</div>
                      <ul className='bg-white'>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[48px] border-y border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba68c6d3a3c3009f47a_3d-icon-arrow.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 w-4 h-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>Getting started</div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[48px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba55f84c0148beff328_3d-icon-creators.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 w-4 h-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>Creators</div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[48px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba517a7dca21435a3b0_3d-icon-events.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 w-4 h-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>Live events</div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[48px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cf1431caa39bc74b_3d-icon-integrations.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 w-4 h-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>Integration partners</div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[48px] border-b border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cdfc3502b47537a0_3d-icon-faq.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 w-4 h-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>FAQ</div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item h-[48px]'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5766aba613887ae89_3d-icon-youtube.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 w-4 h-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>YouTube</div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='max-[1300px]:w-[180px] border-l border-borderClr w-[240px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>TOOLS</div>
                      <ul className='bg-socials h-[289px]'>
                        <li className='border-y border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[46px] px-4'>
                          Headcount finder
                          </Link>
                        </li>
                        <li className='border-b border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px] px-4'>
                          WHOIS lookup
                          </Link>
                        </li>
                        <li className='border-b border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px] px-4'>
                          Job board
                          </Link>
                        </li>
                        <li className='border-b border-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px] px-4'>
                          Headcount directory
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              {/* COMPANY */}
            <div className='pl-4 pr-2.5 flex h-full items-center cursor-pointer group transition duration-300'>
              <div>Company</div>
              <Image
              src={DropdownArrow}
              className='w-6 ml-1 h-5 w-5 group-hover:rotate-180 transition-all duration-200'
              alt=""
              />
              <div className='hidden z-10 group-hover:block absolute top-[63px] right-1/2 translate-x-1/2 cursor-default'>
                <div className='border border-borderDrop bg-borderBg p-[6.4px] mt-[16px]'>
                  <div className='border border-borderDrop w-full h-full flex'>

                  <div className='border-l border-borderClr w-[640px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>OUR COMPANY</div>
                      <ul className='bg-white flex h-[95px]'>
                        <li className='w-[320px] hover:bg-gray-100 group/item'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853066e82e7262382c_3d-icon-career.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Careers</div>
                              <div className='text-dropdownSubhead'>Learn about our team – and apply to join us</div>
                            </div>
                          </Link>
                        </li>
                        <li className='w-[320px] hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-full'>
                            <div className='border-x border-borderClr h-full w-[73px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853e6bc95850a83d06_3d-icon-heart.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-6 w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px]'>
                              <div className='text-sm'>Customer stories</div>
                              <div className='text-dropdownSubhead'>Read about how our biggest customers use (& love) 23BG</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='border-l border-borderClr w-[320px]'>
                      <div className='bg-socials px-4 py-3 font-bold text-textGray text-small cursor-default'>SOCIAL MEDIA</div>
                      <ul className='bg-white'>
                        <li className='border-b border-b-borderClr hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px]'>
                            <div className='p-4 border-r border-borderClr '>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba544733d8223ced8bc_3d-icon-linkedin.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-4 w-4'
                              alt=""/>
                            </div>
                            <div className='px-4'>LinkedIn</div>
                          </Link>
                        </li>
                        <li className='hover:bg-gray-100 group/item'>
                          <Link href='' className='flex items-center h-[47px]'>
                            <div className='p-4 border-r border-borderClr '>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5766aba613887ae89_3d-icon-youtube.avif'
                              width={520}
                              height={520}
                              className='scale-100 group-hover/item:scale-[1.2] transition-all duration-500 h-4 w-4'
                              alt=""/>
                            </div>
                            <div className='px-4'>YouTube</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              {/* ENTERPRISE */}
            <div className='pl-4 pr-2.5 group transition duration-300 cursor-pointer py-4'>
              Enterprise
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-black"></span>
            </div>
              {/* PRICING */}
            <div className='pl-4 pr-2.5 group transition duration-300 cursor-pointer py-4'>
            Pricing
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-black"></span>
            </div>
          </div>

          <div className='flex items-center'>
            <Link href='' className='max-md:hidden mx-6 group transition duration-300'>
            Login
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-black"></span>
            </Link>
            <button
              className="flex flex-col h-6 w-6 mx-6 justify-center items-center group lg:hidden"
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  hamburgerOpen && "rotate-45 translate-y-1"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  hamburgerOpen && "opacity-0"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  hamburgerOpen && "-rotate-45 -translate-y-2 "
                }`}
              />
            </button>
            <Link href='' className='px-4 py-2 bg-black text-white rounded flex items-center hover:opacity-80 group transition duration-300'>
              <div className='text-nowrap'>Talk to a GTM Engineer</div>
              <div className='w-5 h-5 ml-2 overflow-hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:-translate-y-5 transition-all duration-200 ease-out' viewBox="0 0 20 20" fill="none"><path d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z" fill="currentColor"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
        {/* hamburger menu */}
        {showDiv && (
            <div className={`absolute z-10 top-[76px] left-0 w-full h-[calc(100vh-76px)] ${hamburgerOpen ? 'animate-InAnimation' : 'animate-OutAnimation'}`}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}>
              <BurgerMenu/>
            </div>
        )}

    </div>
  )
}

export default Header