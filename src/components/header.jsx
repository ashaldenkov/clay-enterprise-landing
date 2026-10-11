'use client'
import Image from 'next/image'
import DropdownArrow from '@/images/dropdown-arrow.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useDelayUnmount from '@/hooks/useDelayUnmount'
import BurgerMenu from './burgerMenu'

const Header = ({ setScrollBlock }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const showDiv = useDelayUnmount(hamburgerOpen, 250)

  // scroll lock on burger open
  useEffect(() => {
    setScrollBlock(hamburgerOpen)
  }, [hamburgerOpen, setScrollBlock])

  const genericHamburgerLine = `h-[2px] w-4 my-[2px] bg-black transition ease transform duration-300`

  return (
    <div>
      <div className="relative z-20 flex h-[76px] w-full items-center justify-between border-b bg-white px-2 text-sm lg:fixed lg:h-[64px] lg:px-6">
        <Link href="" className="flex items-center px-2">
          <Image
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664ffc89ff539b531cc46813_Clay-logo-black-2024.webp"
            width={694}
            height={219}
            alt="Clay"
            priority
            className="h-7 w-auto"
          />
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285a5ca1580d2949393_3d-icon-data.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2850a2625d36b8b8f1c_3d-icon-list.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285ea54e9d33bf44411_3d-icon-outbound.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2857bfce1dfaeba160e_3d-icon-inbound.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6708597ea79851051f846ca0_Claymation.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc88fb18290e684672_3d-icon-wire.avif"
                              width={300}
                              height={300}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abca946b59ed38891ca_3d-icon-wave.avif"
                              width={300}
                              height={300}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abcbf6d348e6ec658f1_3d-icon-cirlcle.avif"
                              width={300}
                              height={300}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abd0cad0edd25c3a333_3d-icon-glass.avif"
                              width={300}
                              height={300}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7baf0d1ed31e280380_RevOps.avif"
                              width={105}
                              height={106}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66e48d7bbebf97135bedbe28_SDR.avif"
                              width={105}
                              height={106}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cf1431caa39bc74b_3d-icon-integrations.avif"
                              width={105}
                              height={106}
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
                              src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/670175f515ea5801d59eeb45_CSV.avif"
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
                              src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/67017619c252f8cb382976c0_CS.avif"
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2862e602277a94d9090_3d-icon-university.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abc6de317f059ab70ef_3d-icon-folders.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c6065558289a2359d904_3d-icon-start.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c286e983c04a8f9800b8_3d-icon-blog.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66eb4ab83112047640fee011_claybooks.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c28592e0cc2fd58c5bd0_3d-icon-slack.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba68c6d3a3c3009f47a_3d-icon-arrow.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba55f84c0148beff328_3d-icon-creators.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba517a7dca21435a3b0_3d-icon-events.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cf1431caa39bc74b_3d-icon-integrations.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5cdfc3502b47537a0_3d-icon-faq.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5766aba613887ae89_3d-icon-youtube.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853066e82e7262382c_3d-icon-career.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853e6bc95850a83d06_3d-icon-heart.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba544733d8223ced8bc_3d-icon-linkedin.avif"
                              width={520}
                              height={520}
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
                              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66993ba5766aba613887ae89_3d-icon-youtube.avif"
                              width={520}
                              height={520}
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
          <Link
            href=""
            className="group flex items-center rounded-sm bg-black px-4 py-2 text-white transition duration-300 hover:opacity-80"
          >
            <div className="text-nowrap">Talk to a GTM Engineer</div>
            <div className="ml-2 h-5 w-5 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-all duration-200 ease-out group-hover:-translate-y-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-all duration-200 ease-out group-hover:-translate-y-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.49951 9.99986C2.49951 10.1656 2.56536 10.3246 2.68257 10.4418C2.79978 10.559 2.95875 10.6249 3.12451 10.6249H15.3659L10.8073 15.1827C10.7493 15.2407 10.7032 15.3097 10.6718 15.3855C10.6403 15.4614 10.6242 15.5427 10.6242 15.6249C10.6242 15.707 10.6403 15.7883 10.6718 15.8642C10.7032 15.94 10.7493 16.009 10.8073 16.067C10.8654 16.1251 10.9343 16.1712 11.0102 16.2026C11.0861 16.234 11.1674 16.2502 11.2495 16.2502C11.3316 16.2502 11.4129 16.234 11.4888 16.2026C11.5647 16.1712 11.6336 16.1251 11.6917 16.067L17.3167 10.442C17.3748 10.384 17.4209 10.3151 17.4524 10.2392C17.4838 10.1633 17.5 10.082 17.5 9.99986C17.5 9.91772 17.4838 9.8364 17.4524 9.76052C17.4209 9.68465 17.3748 9.61572 17.3167 9.55767L11.6917 3.93267C11.5744 3.8154 11.4154 3.74951 11.2495 3.74951C11.0837 3.74951 10.9246 3.8154 10.8073 3.93267C10.69 4.04995 10.6242 4.20901 10.6242 4.37486C10.6242 4.54071 10.69 4.69977 10.8073 4.81705L15.3659 9.37486H3.12451C2.95875 9.37486 2.79978 9.44071 2.68257 9.55792C2.56536 9.67513 2.49951 9.8341 2.49951 9.99986Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </Link>
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
