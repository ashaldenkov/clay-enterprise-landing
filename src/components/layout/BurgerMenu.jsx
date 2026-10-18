import { useState } from 'react'
import Link from 'next/link'
import DropdownArrow from '@/images/dropdown-arrow.svg'
import Image from 'next/image'

const BurgerMenu = () => {
  const [hamburgerOptionActive, setHamburgerOptionActive] = useState()

  return (
    <nav
      className="overflow-y-auto bg-white text-sm"
      onClick={(e) => e.stopPropagation()}
    >
      {/* product */}
      <Link
        href=""
        className="flex h-[56px] items-center border-b p-4 md:h-[72px] md:p-6"
        onClick={() => {
          if (hamburgerOptionActive === 'product')
            setHamburgerOptionActive(null)
          else setHamburgerOptionActive('product')
        }}
      >
        <div>Product</div>
        <Image
          src={DropdownArrow}
          className={`ml-1 size-5 transition-all duration-200 ${hamburgerOptionActive === 'product' ? 'rotate-180' : ''}`}
          alt=""
        />
      </Link>
      {hamburgerOptionActive === 'product' && (
        <div className="w-full">
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
              recurring workflows
            </div>
            <ul className="bg-white md:flex md:flex-wrap">
              <li className="h-[50px] border-y border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/data.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    CRM enrichment & hygiene
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Connect to and auto-update your CRM as a source of truth
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2 md:border-y">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/list.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    TAM sourcing
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Build targeted lead lists using 10+ sources and AI
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/outbound.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Automated inbound
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Connect to your webforms and auto-enrich and score leads
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/inbound.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Automated outbound
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Build, enrich, score, and message leads in seconds
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-r border-borderClr md:h-[95px] md:w-[calc(50%+1px)]">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/claymation.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Intent data
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Track job changes, new hires, promotions, and more
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:border-y md:border-borderClr md:px-6">
              Features
            </div>
            <ul className="bg-white md:flex md:flex-wrap">
              <li className="h-[50px] border-y border-borderClr md:h-[95px] md:w-1/2 md:border-t-0">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/wire.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Integrations
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Access 50+ databases to get the most comprehensive
                      coverage of information
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/wave.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Multi-provider data enrichment
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Search multiple providers sequentially to maximize data
                      quality and coverage
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/circle.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    AI research agent
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Ask our agent to search websites and find all the answer
                      to your questions
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/glass.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Personalized copywriting
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Use our AI email builder to write & send personalized
                      emails that convert
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray md:px-6">
              QUICK LINKS
            </div>
            <ul className="bg-socials">
              <li className="border-b border-borderClr">
                <Link
                  href=""
                  className="flex h-[46px] items-center px-4 md:px-6"
                >
                  Templates
                </Link>
              </li>
              <li className="border-b border-borderClr">
                <Link
                  href=""
                  className="flex h-[47px] items-center px-4 md:px-6"
                >
                  Chrome Extension
                </Link>
              </li>
              <li className="border-b border-borderClr">
                <Link
                  href=""
                  className="flex h-[47px] items-center px-4 md:px-6"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex h-[47px] items-center px-4 md:px-6"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* solutions */}
      <Link
        href=""
        className="flex h-[56px] items-center border-b p-4 md:h-[72px] md:p-6"
        onClick={() => {
          if (hamburgerOptionActive === 'solutions')
            setHamburgerOptionActive(null)
          else setHamburgerOptionActive('solutions')
        }}
      >
        <div>Solutions</div>
        <Image
          src={DropdownArrow}
          className={`ml-1 size-5 transition-all duration-200 ${hamburgerOptionActive === 'solutions' ? 'rotate-180' : ''}`}
          alt=""
        />
      </Link>
      {hamburgerOptionActive === 'solutions' && (
        <div className="w-full">
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
              clay for
            </div>
            <ul className="bg-white md:flex md:flex-wrap">
              <li className="h-[50px] border-y border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/revops.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    RevOps
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Prospect, enrich, and clean your CRM automatically
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2 md:border-t">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/sdr.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    SDRs
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Grow pipeline faster by targeting and enriching your
                      prospects in seconds
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] md:h-[95px] md:w-[calc(50%+1px)] md:border-r md:border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/integrations.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Enterprise
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Build the data foundation for any GTM workflow
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block">
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray md:px-6">
              CUSTOMER SOLUTIONS
            </div>
            <ul className="flex w-full bg-white">
              <li className="group/item w-1/2 border-r border-borderClr hover:bg-gray-100">
                <Link href="" className="block h-full p-4">
                  <div className="mb-2 w-full">
                    How Verkada’s growth team uses Clay to launch targeted ABM
                    campaigns across LinkedIn, email, and direct mail
                  </div>
                  <div className="relative h-[298px] w-full overflow-hidden rounded-sm">
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
              <li className="group/item w-1/2 border-borderClr hover:bg-gray-100">
                <Link
                  href=""
                  className="block flex h-full flex-col justify-between p-4"
                >
                  <div className="w-full">
                    How Anthropic uses Clay to 3x their enrichment coverage—with
                    no manual work{' '}
                  </div>
                  <div className="relative h-[298px] w-full overflow-hidden rounded-sm">
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
      )}

      {/* Resources */}
      <Link
        href=""
        className="flex h-[56px] items-center border-b p-4 md:h-[72px] md:p-6"
        onClick={() => {
          if (hamburgerOptionActive === 'resources')
            setHamburgerOptionActive(null)
          else setHamburgerOptionActive('resources')
        }}
      >
        <div>Resources</div>
        <Image
          src={DropdownArrow}
          className={`ml-1 size-5 transition-all duration-200 ${hamburgerOptionActive === 'resources' ? 'rotate-180' : ''}`}
          alt=""
        />
      </Link>
      {hamburgerOptionActive === 'resources' && (
        <div className="w-full">
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
              recurring workflows
            </div>
            <ul className="bg-white md:flex md:flex-wrap">
              <li className="h-[50px] border-y border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/university.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    University
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Learn how to use Clay with our best resources
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2 md:border-y">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/folders.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Templates
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Jumpstart your outbound campaigns with our top templates
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/start.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Experts
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Need help scaling your outbound? Hire a Clay expert
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/blog.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Blog
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Read our best guides for outbound, from email setup to AI
                      copywriting
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                    <Image
                      src="/images/icons/claybooks.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Claybooks
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Build powerful workflows with Clay and other tools
                    </div>
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                    <Image
                      src="/images/icons/slack.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Slack community
                    <div className="hidden text-xs text-dropdownSubhead md:block">
                      Join our Slack for live support and a community of 15K+
                      sales experts!
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
              Additional help
            </div>
            <ul className="bg-white">
              <li className="h-[50px] border-y border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                    <Image
                      src="/images/icons/arrow.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">Getting started</div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                    <Image
                      src="/images/icons/creators.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">Creators</div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                    <Image
                      src="/images/icons/events.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">Live events</div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                    <Image
                      src="/images/icons/integrations.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">
                    Integration partners
                  </div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                    <Image
                      src="/images/icons/faq.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">FAQ</div>
                </Link>
              </li>
              <li className="h-[50px] border-b border-borderClr">
                <Link href="" className="flex h-[47px] h-full items-center">
                  <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                    <Image
                      src="/images/icons/youtube.avif"
                      width={24}
                      height={24}
                      className="h-4 w-4 scale-100 transition-all duration-500"
                      alt=""
                    />
                  </div>
                  <div className="w-[246px] px-4 text-sm">YouTube</div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
              tools
            </div>
            <ul className="bg-socials">
              <li className="border-b border-borderClr">
                <Link
                  href=""
                  className="flex h-[46px] items-center px-4 md:px-6"
                >
                  Headcount finder
                </Link>
              </li>
              <li className="border-b border-borderClr">
                <Link
                  href=""
                  className="flex h-[47px] items-center px-4 md:px-6"
                >
                  WHOIS lookup
                </Link>
              </li>
              <li className="border-b border-borderClr">
                <Link
                  href=""
                  className="flex h-[47px] items-center px-4 md:px-6"
                >
                  Job board
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex h-[47px] items-center px-4 md:px-6"
                >
                  Headcount directory
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Company */}
      <Link
        href=""
        className="flex h-[56px] items-center border-b p-4 md:h-[72px] md:p-6"
        onClick={() => {
          if (hamburgerOptionActive === 'company')
            setHamburgerOptionActive(null)
          else setHamburgerOptionActive('company')
        }}
      >
        <div>Company</div>
        <Image
          src={DropdownArrow}
          className={`ml-1 size-5 transition-all duration-200 ${hamburgerOptionActive === 'company' ? 'rotate-180' : ''}`}
          alt=""
        />
      </Link>
      {hamburgerOptionActive === 'company' && (
        <div className="w-full">
          <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
            our company
          </div>
          <ul className="bg-white md:flex md:flex-wrap">
            <li className="h-[50px] border-y border-borderClr md:h-[95px] md:w-1/2">
              <Link href="" className="flex h-[47px] h-full items-center">
                <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px]">
                  <Image
                    src="/images/icons/career.avif"
                    width={24}
                    height={24}
                    className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                    alt=""
                  />
                </div>
                <div className="w-[246px] px-4 text-sm">
                  Careers
                  <div className="hidden text-xs text-dropdownSubhead md:block">
                    Learn about our team – and apply to join us
                  </div>
                </div>
              </Link>
            </li>
            <li className="h-[50px] border-b border-borderClr md:h-[95px] md:w-1/2 md:border-t">
              <Link href="" className="flex h-[47px] h-full items-center">
                <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:w-[81px] md:border-l">
                  <Image
                    src="/images/icons/heart.avif"
                    width={24}
                    height={24}
                    className="h-4 w-4 scale-100 transition-all duration-500 md:h-6 md:w-6"
                    alt=""
                  />
                </div>
                <div className="w-[246px] px-4 text-sm">
                  Customer stories
                  <div className="hidden text-xs text-dropdownSubhead md:block">
                    Read about how our biggest customers use (& love) Clay
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <div className="cursor-default bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
            Social media
          </div>
          <ul className="bg-white">
            <li className="h-[50px] border-y border-borderClr">
              <Link href="" className="flex h-[47px] h-full items-center">
                <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                  <Image
                    src="/images/icons/linkedin.avif"
                    width={24}
                    height={24}
                    className="h-4 w-4 scale-100 transition-all duration-500"
                    alt=""
                  />
                </div>
                <div className="w-[246px] px-4 text-sm">LinkedIn</div>
              </Link>
            </li>
            <li className="h-[50px]">
              <Link href="" className="flex h-[47px] h-full items-center">
                <div className="flex h-full w-[49px] items-center justify-center border-r border-borderClr md:ml-2">
                  <Image
                    src="/images/icons/youtube.avif"
                    width={24}
                    height={24}
                    className="h-4 w-4 scale-100 transition-all duration-500"
                    alt=""
                  />
                </div>
                <div className="w-[246px] px-4 text-sm">YouTube</div>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Links */}
      <Link href="" className="block h-[56px] border-b p-4 md:h-[72px] md:p-6">
        Enterprise
      </Link>
      <Link href="" className="block h-[56px] border-b p-4 md:h-[72px] md:p-6">
        Pricing
      </Link>
      <Link
        href=""
        className="m-4 inline-block h-10 rounded-sm bg-black px-4 py-2 text-white md:m-6"
      >
        Start building — for free
      </Link>
    </nav>
  )
}

export default BurgerMenu
