'use client'
import Image from 'next/image'
import DropdownArrow from '@/images/dropdown-arrow.svg'
import Link from 'next/link'
import { useState } from 'react'
import useDelayUnmount from '@/hooks/useDelayUnmount'
import useScrollLock from '@/hooks/useScrollLock'
import { ClayLogo } from '@/components/ui/ClayLogo'
import { ContactButton } from '@/components/ui/ContactButton'
import BurgerMenu from './burgerMenu'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const showDiv = useDelayUnmount(hamburgerOpen, 250)
  useScrollLock(hamburgerOpen)

  const genericHamburgerLine = `h-[2px] w-4 my-[2px] bg-black transition ease transform duration-300`

  return (
    <div>
      <div className="relative z-20 flex h-[76px] w-full items-center justify-between border-b bg-white px-2 text-sm lg:fixed lg:h-[64px] lg:px-6">
        <Link href="" className="flex items-center px-2">
          <ClayLogo preload className="h-7" />
        </Link>

        <div className="flex h-full items-center max-lg:hidden">
          {/* PRODUCT */}
          <div className="group flex h-full cursor-pointer items-center pr-2.5 pl-4 transition duration-300">
            <div>Product</div>
            <Image
              src={DropdownArrow}
              className="ml-1 size-5 transition-all duration-200 group-hover:rotate-180"
              alt=""
            />
            <div className="absolute top-[63px] right-1/2 z-10 hidden translate-x-1/2 cursor-default group-hover:block">
              <div className="mt-[16px] border border-borderDrop bg-borderBg p-[6.4px]">
                <div className="flex h-full w-full border border-borderDrop bg-white">
                  <div className="w-[320px]">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      RECURRING WORKFLOWS
                    </div>
                    <ul className="bg-white">
                      <li className="group/item h-[96px] w-[320px] border-y border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/data.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">
                              CRM enrichment & hygiene
                            </div>
                            <div className="text-dropdownSubhead">
                              Connect to and auto-update your CRM as a source of
                              truth
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/list.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">TAM sourcing</div>
                            <div className="text-dropdownSubhead">
                              Build targeted lead lists using 10+ sources and AI
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/outbound.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Automated inbound</div>
                            <div className="text-dropdownSubhead">
                              Connect to your webforms and auto-enrich and score
                              leads
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/inbound.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Automated outbound</div>
                            <div className="text-dropdownSubhead">
                              Build, enrich, score, and message leads in seconds
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/claymation.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Intent data</div>
                            <div className="text-dropdownSubhead">
                              Track job changes, new hires, promotions, and more
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[320px] border-l border-borderClr">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      FEATURES
                    </div>
                    <ul className="bg-white">
                      <li className="group/item h-[96px] w-[320px] border-y border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/wire.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Integrations</div>
                            <div className="text-dropdownSubhead">
                              Access 50+ databases to get the most comprehensive
                              coverage of information
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/wave.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">
                              Multi-provider data enrichment
                            </div>
                            <div className="text-dropdownSubhead">
                              Search multiple providers sequentially to maximize
                              data quality and coverage
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/circle.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">AI research agent</div>
                            <div className="text-dropdownSubhead">
                              Ask our agent to search websites and find all the
                              answer to your questions
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/glass.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">
                              Personalized copywriting
                            </div>
                            <div className="text-dropdownSubhead">
                              Use our AI email builder to write & send
                              personalized emails that convert
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[240px] border-l border-borderClr">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      QUICK LINKS
                    </div>
                    <ul className="h-[480px] bg-socials">
                      <li className="group/item border-y border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[46px] items-center px-4"
                        >
                          Templates
                        </Link>
                      </li>
                      <li className="group/item border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] items-center px-4"
                        >
                          Chrome Extension
                        </Link>
                      </li>
                      <li className="group/item border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] items-center px-4"
                        >
                          Changelog
                        </Link>
                      </li>
                      <li className="group/item border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] items-center px-4"
                        >
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
          <div className="group flex h-full cursor-pointer items-center pr-2.5 pl-4 transition duration-300">
            <div>Solutions</div>
            <Image
              src={DropdownArrow}
              className="ml-1 size-5 transition-all duration-200 group-hover:rotate-180"
              alt=""
            />
            <div className="absolute top-[63px] right-1/2 z-10 hidden translate-x-1/2 cursor-default group-hover:block">
              <div className="mt-[16px] border border-borderDrop bg-borderBg p-[6.4px]">
                <div className="flex h-full w-full border border-borderDrop bg-white">
                  <div className="w-[320px]">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      CLAY FOR
                    </div>
                    <ul className="bg-white">
                      <li className="group/item h-[96px] w-[320px] border-y border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/revops.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">RevOps</div>
                            <div className="text-dropdownSubhead">
                              Prospect, enrich, and clean your CRM automatically
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/sdr.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">SDRs</div>
                            <div className="text-dropdownSubhead">
                              Grow pipeline faster by targeting and enriching
                              your prospects in seconds
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/integrations.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Enterprise</div>
                            <div className="text-dropdownSubhead">
                              Build the data foundation for any GTM workflow
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[576px] border-l border-borderClr">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      CUSTOMER SOLUTIONS
                    </div>
                    <ul className="flex h-[288px] w-full bg-white">
                      <li className="group/item w-1/2 border-t border-r border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="block flex h-full flex-col justify-between p-4"
                        >
                          <div className="w-full">
                            How Verkada’s growth team uses Clay to launch
                            targeted ABM campaigns across LinkedIn, email, and
                            direct mail
                          </div>
                          <div className="relative h-[180px] w-full overflow-hidden rounded-sm">
                            <Image
                              src="/images/case-studies/verkada.avif"
                              width={744}
                              height={528}
                              className="scale-[1] transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                        </Link>
                      </li>
                      <li className="group/item w-1/2 border-t border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="block flex h-full flex-col justify-between p-4"
                        >
                          <div className="w-full">
                            How Anthropic uses Clay to 3x their enrichment
                            coverage—with no manual work{' '}
                          </div>
                          <div className="relative h-[180px] w-full overflow-hidden rounded-sm">
                            <Image
                              src="/images/case-studies/anthropic.avif"
                              width={744}
                              height={528}
                              className="scale-[1] transition-all duration-500 group-hover/item:scale-[1.2]"
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
          <div className="group flex h-full cursor-pointer items-center pr-2.5 pl-4 transition duration-300">
            <div>Resources</div>
            <Image
              src={DropdownArrow}
              className="ml-1 size-5 transition-all duration-200 group-hover:rotate-180"
              alt=""
            />
            <div className="absolute top-[63px] right-1/2 z-10 hidden translate-x-1/2 cursor-default group-hover:block">
              <div className="mt-[16px] border border-borderDrop bg-borderBg p-[6.4px]">
                <div className="flex h-full w-full border border-borderDrop bg-white">
                  <div className="w-[640px] max-[1300px]:w-[480px]">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      RECURRING WORKFLOWS
                    </div>
                    <ul className="flex flex-wrap bg-white">
                      <li className="group/item h-[96px] w-[320px] border-y border-r border-borderClr hover:bg-gray-100 max-[1300px]:w-[240px]">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/university.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">University</div>
                            <div className="text-xs text-dropdownSubhead">
                              Learn how to use Clay with our best resources
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-y border-borderClr hover:bg-gray-100 max-[1300px]:w-[240px]">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/folders.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Templates</div>
                            <div className="text-xs text-dropdownSubhead">
                              Jumpstart your outbound campaigns with our top
                              templates
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-r border-b border-borderClr hover:bg-gray-100 max-[1300px]:w-[240px]">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/start.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Experts</div>
                            <div className="text-xs text-dropdownSubhead">
                              Need help scaling your outbound? Hire a Clay
                              expert
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-b border-borderClr hover:bg-gray-100 max-[1300px]:w-[240px]">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/blog.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Blog</div>
                            <div className="text-xs text-dropdownSubhead">
                              Read our best guides for outbound, from email
                              setup to AI copywriting
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] border-r hover:bg-gray-100 max-[1300px]:w-[240px]">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/claybooks.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Claybooks</div>
                            <div className="text-xs text-dropdownSubhead">
                              Build powerful workflows with Clay and other tools
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[96px] w-[320px] hover:bg-gray-100 max-[1300px]:w-[240px]">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/slack.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Slack community</div>
                            <div className="text-xs text-dropdownSubhead">
                              Join our Slack for live support and a community of
                              15K+ sales experts!
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[320px] border-l border-borderClr max-[1300px]:w-[240px]">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      ADDITIONAL HELP
                    </div>
                    <ul className="bg-white">
                      <li className="group/item h-[48px] w-[320px] border-y border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/arrow.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4 text-sm">
                            Getting started
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[48px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/creators.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4 text-sm">Creators</div>
                        </Link>
                      </li>
                      <li className="group/item h-[48px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/events.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4 text-sm">
                            Live events
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[48px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/integrations.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4 text-sm">
                            Integration partners
                          </div>
                        </Link>
                      </li>
                      <li className="group/item h-[48px] w-[320px] border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/faq.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4 text-sm">FAQ</div>
                        </Link>
                      </li>
                      <li className="group/item h-[48px] w-[320px] hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/youtube.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4 text-sm">YouTube</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[240px] border-l border-borderClr max-[1300px]:w-[180px]">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      TOOLS
                    </div>
                    <ul className="h-[289px] bg-socials">
                      <li className="group/item border-y border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[46px] items-center px-4"
                        >
                          Headcount finder
                        </Link>
                      </li>
                      <li className="group/item border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] items-center px-4"
                        >
                          WHOIS lookup
                        </Link>
                      </li>
                      <li className="group/item border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] items-center px-4"
                        >
                          Job board
                        </Link>
                      </li>
                      <li className="group/item border-b border-borderClr hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] items-center px-4"
                        >
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
          <div className="group flex h-full cursor-pointer items-center pr-2.5 pl-4 transition duration-300">
            <div>Company</div>
            <Image
              src={DropdownArrow}
              className="ml-1 size-5 transition-all duration-200 group-hover:rotate-180"
              alt=""
            />
            <div className="absolute top-[63px] right-1/2 z-10 hidden translate-x-1/2 cursor-default group-hover:block">
              <div className="mt-[16px] border border-borderDrop bg-borderBg p-[6.4px]">
                <div className="flex h-full w-full border border-borderDrop">
                  <div className="w-[640px] border-l border-borderClr">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      OUR COMPANY
                    </div>
                    <ul className="flex h-[95px] bg-white">
                      <li className="group/item w-[320px] hover:bg-gray-100">
                        <Link
                          href=""
                          className="flex h-[47px] h-full items-center"
                        >
                          <div className="flex h-full w-[73px] items-center justify-center border-r border-borderClr">
                            <Image
                              src="/images/icons/career.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Careers</div>
                            <div className="text-dropdownSubhead">
                              Learn about our team – and apply to join us
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="group/item w-[320px] hover:bg-gray-100">
                        <Link href="" className="flex h-full items-center">
                          <div className="flex h-full w-[73px] items-center justify-center border-x border-borderClr">
                            <Image
                              src="/images/icons/heart.avif"
                              width={24}
                              height={24}
                              className="h-6 w-6 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="w-[246px] px-4">
                            <div className="text-sm">Customer stories</div>
                            <div className="text-dropdownSubhead">
                              Read about how our biggest customers use (& love)
                              Clay
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[320px] border-l border-borderClr">
                    <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray">
                      SOCIAL MEDIA
                    </div>
                    <ul className="bg-white">
                      <li className="group/item border-b border-b-borderClr hover:bg-gray-100">
                        <Link href="" className="flex h-[47px] items-center">
                          <div className="border-r border-borderClr p-4">
                            <Image
                              src="/images/icons/linkedin.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="px-4">LinkedIn</div>
                        </Link>
                      </li>
                      <li className="group/item hover:bg-gray-100">
                        <Link href="" className="flex h-[47px] items-center">
                          <div className="border-r border-borderClr p-4">
                            <Image
                              src="/images/icons/youtube.avif"
                              width={24}
                              height={24}
                              className="h-4 w-4 scale-100 transition-all duration-500 group-hover/item:scale-[1.2]"
                              alt=""
                            />
                          </div>
                          <div className="px-4">YouTube</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ENTERPRISE */}
          <div className="group cursor-pointer py-4 pr-2.5 pl-4 transition duration-300">
            Enterprise
            <span className="block h-px max-w-0 bg-black transition-all duration-300 group-hover:max-w-full"></span>
          </div>
          {/* PRICING */}
          <div className="group cursor-pointer py-4 pr-2.5 pl-4 transition duration-300">
            Pricing
            <span className="block h-px max-w-0 bg-black transition-all duration-300 group-hover:max-w-full"></span>
          </div>
        </div>

        <div className="flex items-center">
          <Link
            href=""
            className="group mx-6 transition duration-300 max-md:hidden"
          >
            Login
            <span className="block h-px max-w-0 bg-black transition-all duration-300 group-hover:max-w-full"></span>
          </Link>
          <button
            className="group mx-6 flex h-6 w-6 flex-col items-center justify-center lg:hidden"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                hamburgerOpen && 'translate-y-1 rotate-45'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                hamburgerOpen && 'opacity-0'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                hamburgerOpen && '-translate-y-2 -rotate-45 '
              }`}
            />
          </button>
          <ContactButton />
        </div>
      </div>
      {/* hamburger menu */}
      {showDiv && (
        <div
          className={`absolute top-[76px] left-0 z-10 h-[calc(100vh-76px)] w-full ${hamburgerOpen ? 'animate-InAnimation' : 'animate-OutAnimation'}`}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <BurgerMenu />
        </div>
      )}
    </div>
  )
}

export default Header
