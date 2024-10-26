import { useState } from 'react';
import Link from 'next/link'
import DropdownArrow from '@/images/dropdown-arrow.svg'
import Image from 'next/image'


const BurgerMenu = () => {
    const [hamburgerOptionActive, setHamburgerOptionActive] = useState();


  return (
    <nav className='bg-white text-sm overflow-y-auto' onClick={e => e.stopPropagation()}>
        {/* product */}
        <Link href='' className='flex items-center p-4 md:p-6  border-b border-gray h-[56px] md:h-[72px]' 
        onClick={() => { if (hamburgerOptionActive === 'product') setHamburgerOptionActive(null)
        else setHamburgerOptionActive('product')}}>
        <div>Product</div>
        <Image
        src={DropdownArrow}
        className={`w-6 ml-1 h-5 w-5 transition-all duration-200 ${hamburgerOptionActive === 'product' ? 'rotate-180' : ''}`}
        alt=""
        />
        </Link>
        {
            (hamburgerOptionActive === 'product') && (
                <div className='w-full'>
                    <div>
                        <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>recurring workflows</div>
                        <ul className='bg-white md:flex md:flex-wrap'>
                            <li className='h-[50px] md:h-[95px] border-y border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285a5ca1580d2949393_3d-icon-data.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                CRM enrichment & hygiene
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Connect to and auto-update your CRM as a source of truth</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b md:border-y border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2850a2625d36b8b8f1c_3d-icon-list.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                TAM sourcing
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Build targeted lead lists using 10+ sources and AI</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285ea54e9d33bf44411_3d-icon-outbound.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Automated inbound
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Connect to your webforms and auto-enrich and score leads</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2857bfce1dfaeba160e_3d-icon-inbound.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Automated outbound
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Build, enrich, score, and message leads in seconds</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-r border-borderClr md:w-[calc(50%+1px)]'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6708597ea79851051f846ca0_Claymation.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Intent data
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Track job changes, new hires, promotions, and more</div>
                                </div>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase md:border-y md:border-borderClr'>Features</div>
                        <ul className='bg-white md:flex md:flex-wrap'>
                            <li className='h-[50px] md:h-[95px] border-y md:border-t-0 border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc88fb18290e684672_3d-icon-wire.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Integrations
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Access 50+ databases to get the most comprehensive coverage of information</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abca946b59ed38891ca_3d-icon-wave.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Multi-provider data enrichment
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Search multiple providers sequentially to maximize data quality and coverage</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abcbf6d348e6ec658f1_3d-icon-cirlcle.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                AI research agent
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Ask our agent to search websites and find all the answer to your questions</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abd0cad0edd25c3a333_3d-icon-glass.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Personalized copywriting
                                <div className='hidden md:block text-xs text-dropdownSubhead'>Use our AI email builder to write & send personalized emails that convert</div>
                                </div>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                      <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default'>QUICK LINKS</div>
                      <ul className='bg-socials'>
                        <li className='border-b border-borderClr'>
                          <Link href='' className='flex items-center h-[46px] px-4 md:px-6'>
                          Templates
                          </Link>
                        </li>
                        <li className='border-b border-borderClr'>
                          <Link href='' className='flex items-center h-[47px] px-4 md:px-6'>
                          Chrome Extension
                          </Link>
                        </li>
                        <li className='border-b border-borderClr'>
                          <Link href='' className='flex items-center h-[47px] px-4 md:px-6'>
                          Changelog
                          </Link>
                        </li>
                        <li>
                          <Link href='' className='flex items-center h-[47px] px-4 md:px-6'>
                          Security
                          </Link>
                        </li>
                      </ul>
                    </div>
                </div>            
                )
        }

        {/* solutions */}
        <Link href='' className='flex items-center p-4 md:p-6 border-b border-gray h-[56px] md:h-[72px]' 
        onClick={() => { if (hamburgerOptionActive === 'solutions') setHamburgerOptionActive(null)
        else setHamburgerOptionActive('solutions')}}>
        <div>Solutions</div>
        <Image
        src={DropdownArrow}
        className={`w-6 ml-1 h-5 w-5 transition-all duration-200 ${hamburgerOptionActive === 'solutions' ? 'rotate-180' : ''}`}
        alt=""
        />
        </Link>
        {
            (hamburgerOptionActive === 'solutions') && (
                <div className='w-full'>
                    <div>
                      <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>23bg for</div>
                      <ul className='bg-white md:flex md:flex-wrap'>
                        <li className='h-[50px] md:h-[95px] border-y border-borderClr md:w-1/2'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7baf0d1ed31e280380_RevOps.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                              RevOps
                              <div className='hidden md:block text-xs text-dropdownSubhead'>Prospect, enrich, and clean your CRM automatically</div>
                            </div>
                          </Link>
                        </li>
                        <li className='h-[50px] md:h-[95px] border-b md:border-t border-borderClr md:w-1/2'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7bbebf97135bedbe28_SDR.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                              SDRs
                              <div className='hidden md:block text-xs text-dropdownSubhead'>Grow pipeline faster by targeting and enriching your prospects in seconds</div>
                            </div>
                          </Link>
                        </li>
                        <li className='h-[50px] md:h-[95px] md:w-[calc(50%+1px)] md:border-r md:border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cf1431caa39bc74b_3d-icon-integrations.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                              Enterprise
                              <div className='hidden md:block text-xs text-dropdownSubhead'>Build the data foundation for any GTM workflow</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='w-full hidden md:block'>
                        <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default'>CUSTOMER SOLUTIONS</div>
                        <ul className='bg-white w-full flex'>
                                <li className='border-r border-borderClr hover:bg-gray-100 group/item w-1/2'>
                                <Link href='' className='block p-4 h-full'>
                                <div className='w-full mb-2'>How Verkada’s growth team uses 23BG to launch targeted ABM campaigns across LinkedIn, email, and direct mail</div>
                                    <div className='overflow-hidden rounded w-full h-[298px] relative'>
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
                                <li className='border-borderClr hover:bg-gray-100 group/item w-1/2'>
                                <Link href='' className='block p-4 h-full flex flex-col justify-between'>
                                    <div className='w-full'>How Anthropic uses 23BG to 3x their enrichment coverage—with no manual work </div>
                                    <div className='overflow-hidden rounded w-full h-[298px] relative'>
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
            )
        }

        {/* Resources */}
        <Link href='' className='flex items-center p-4 md:p-6 border-b border-gray h-[56px] md:h-[72px]' 
        onClick={() => { if (hamburgerOptionActive === 'resources') setHamburgerOptionActive(null)
        else setHamburgerOptionActive('resources')}}>
        <div>Resources</div>
        <Image
        src={DropdownArrow}
        className={`w-6 ml-1 h-5 w-5 transition-all duration-200 ${hamburgerOptionActive === 'resources' ? 'rotate-180' : ''}`}
        alt=""
        />
        </Link>
        {
            (hamburgerOptionActive === 'resources') && (
                <div className='w-full'>
                    <div>
                        <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>recurring workflows</div>
                        <ul className='bg-white md:flex md:flex-wrap'>
                            <li className='h-[50px] md:h-[95px] border-y border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2862e602277a94d9090_3d-icon-university.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                University
                                <div className='text-dropdownSubhead hidden md:block text-xs'>Learn how to use 23BG with our best resources</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b md:border-y border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc6de317f059ab70ef_3d-icon-folders.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Templates
                                <div className='text-dropdownSubhead hidden md:block text-xs'>Jumpstart your outbound campaigns with our top templates</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c6065558289a2359d904_3d-icon-start.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Experts
                                <div className='text-dropdownSubhead hidden md:block text-xs'>Need help scaling your outbound? Hire a 23BG expert</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c286e983c04a8f9800b8_3d-icon-blog.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Blog
                                <div className='text-dropdownSubhead hidden md:block text-xs'>Read our best guides for outbound, from email setup to AI copywriting</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66eb4ab83112047640fee011_claybooks.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                23BGbooks
                                <div className='text-dropdownSubhead hidden md:block text-xs'>Build powerful workflows with 23BG and other tools</div>
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] md:h-[95px] border-b border-borderClr md:w-1/2'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c28592e0cc2fd58c5bd0_3d-icon-slack.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Slack community
                                <div className='text-dropdownSubhead hidden md:block text-xs'>Join our Slack for live support and a community of 15K+ sales experts!</div>
                                </div>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>Additional help</div>
                        <ul className='bg-white'>
                            <li className='h-[50px] border-y border-borderClr'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba68c6d3a3c3009f47a_3d-icon-arrow.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Getting started
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] border-b border-borderClr'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba55f84c0148beff328_3d-icon-creators.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Creators
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] border-b border-borderClr'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba517a7dca21435a3b0_3d-icon-events.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Live events
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] border-b border-borderClr'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cf1431caa39bc74b_3d-icon-integrations.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                Integration partners
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] border-b border-borderClr'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cdfc3502b47537a0_3d-icon-faq.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                FAQ
                                </div>
                            </Link>
                            </li>
                            <li className='h-[50px] border-b border-borderClr'>
                            <Link href='' className='flex h-full items-center h-[47px]'>
                                <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                                <Image
                                src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5766aba613887ae89_3d-icon-youtube.avif'
                                width={105}
                                height={106}
                                className='scale-100 transition-all duration-500 h-4 w-4'
                                alt=""/>
                                </div>
                                <div className='px-4 w-[246px] text-sm'>
                                YouTube
                                </div>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                      <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>tools</div>
                      <ul className='bg-socials'>
                        <li className='border-b border-borderClr'>
                          <Link href='' className='flex items-center h-[46px] px-4 md:px-6'>
                          Headcount finder
                          </Link>
                        </li>
                        <li className='border-b border-borderClr'>
                          <Link href='' className='flex items-center h-[47px] px-4 md:px-6'>
                          WHOIS lookup
                          </Link>
                        </li>
                        <li className='border-b border-borderClr'>
                          <Link href='' className='flex items-center h-[47px] px-4 md:px-6'>
                          Job board
                          </Link>
                        </li>
                        <li>
                          <Link href='' className='flex items-center h-[47px] px-4 md:px-6'>
                          Headcount directory
                          </Link>
                        </li>
                      </ul>
                    </div>
                </div>            
                )
        }

        {/* Company */}
        <Link href='' className='flex items-center p-4 md:p-6 border-b border-gray h-[56px] md:h-[72px]' 
        onClick={() => { if (hamburgerOptionActive === 'company') setHamburgerOptionActive(null)
        else setHamburgerOptionActive('company')}}>
        <div>Company</div>
        <Image
        src={DropdownArrow}
        className={`w-6 ml-1 h-5 w-5 transition-all duration-200 ${hamburgerOptionActive === 'company' ? 'rotate-180' : ''}`}
        alt=""
        />
        </Link>
        {
            (hamburgerOptionActive === 'company') && (
                <div className='w-full'>
                      <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>our company</div>
                      <ul className='bg-white md:flex md:flex-wrap'>
                        <li className='h-[50px] md:h-[95px] border-y border-borderClr md:w-1/2'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853066e82e7262382c_3d-icon-career.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                            Careers
                            <div className='text-dropdownSubhead hidden md:block text-xs'>Learn about our team – and apply to join us</div>
                            </div>
                          </Link>
                        </li>
                        <li className='h-[50px] md:h-[95px] border-b md:border-t border-borderClr md:w-1/2'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r md:border-l border-borderClr h-full w-[49px] md:w-[81px] flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853e6bc95850a83d06_3d-icon-heart.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4 md:h-6 md:w-6'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                            Customer stories
                            <div className='text-dropdownSubhead hidden md:block text-xs'>Read about how our biggest customers use (& love) 23BG</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                      <div className='bg-socials px-4 md:px-6 py-3 font-bold text-textGray text-small cursor-default uppercase'>Social media</div>
                      <ul className='bg-white'>
                        <li className='h-[50px] border-y border-borderClr'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba544733d8223ced8bc_3d-icon-linkedin.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                            LinkedIn
                            </div>
                          </Link>
                        </li>
                        <li className='h-[50px]'>
                          <Link href='' className='flex h-full items-center h-[47px]'>
                            <div className='border-r border-borderClr h-full w-[49px] md:ml-2 flex items-center justify-center'>
                              <Image
                              src='https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5766aba613887ae89_3d-icon-youtube.avif'
                              width={105}
                              height={106}
                              className='scale-100 transition-all duration-500 h-4 w-4'
                              alt=""/>
                            </div>
                            <div className='px-4 w-[246px] text-sm'>
                            YouTube
                            </div>
                          </Link>
                        </li>
                      </ul>
                </div>
            )
        }

        {/* Links */}
        <Link href='' className='block p-4 md:p-6 border-b border-gray h-[56px] md:h-[72px]'>
        Enterprise
        </Link>
        <Link href='' className='block p-4 md:p-6 border-b border-gray h-[56px] md:h-[72px]'>
        Pricing
        </Link>
        <Link href='' className='inline-block px-4 m-4 md:m-6 h-10 text-white bg-black rounded py-2'>
        Start building — for free
        </Link>
    </nav>
  )
}

export default BurgerMenu