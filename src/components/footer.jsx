import Link from 'next/link'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { ClayLogo } from '@/components/ui/ClayLogo'

const LINK_GROUPS = [
  {
    title: 'Product',
    links: ['Login', 'University', 'Integrations', 'Pricing', 'Changelog'],
  },
  {
    title: 'Blog',
    links: [
      'AI for Sales Prospecting',
      'Why good CRM data matters',
      'Google Maps lead generation in 5 easy steps',
      'Outbound Sales Automation',
      'AI Lead Generation',
    ],
  },
  {
    title: 'Tools',
    links: [
      'Email Finder',
      'Headcount Finder',
      'Credits Calculator',
      'Chrome extension',
      'Lookup WHOIS Info',
      'CPM Calculator',
      'Margin Calculator',
      'Headcount Directory',
      'Glossary',
      'Dossier',
      'Job Board',
    ],
  },
  {
    title: 'Support',
    links: ['Send us an email', 'Join Slack', 'FAQ', 'Status'],
  },
  {
    title: 'Company',
    links: [
      'Customer Stories',
      'Wall of Love',
      'Careers',
      'Creators Program',
      'Integrate with Clay',
    ],
  },
  {
    title: 'Legal',
    links: [
      'Privacy Policy',
      'Terms of Service',
      'Do not sell my data',
      'Cookie preferences',
    ],
  },
]

const Footer = () => {
  return (
    <div className="bg-black pb-[80px] text-white">
      {/* prefooter */}
      <div className='flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),black),url("/images/backgrounds/shapes.webp")] bg-cover bg-top-left bg-no-repeat px-4 py-[96px] md:py-[128px] lg:bg-top'>
        <div className="mb-8 text-center text-[41px] leading-tight font-bold md:text-6xl md:leading-none lg:text-7xl">
          Start molding your dream campaigns today
        </div>
        <div className="mb-4 text-center">
          Start your 14-day Pro trial today. No credit card required.
        </div>
        <ArrowLink
          variant="inverted"
          className="mb-8 font-bold whitespace-nowrap"
        >
          Try it – it’s free
        </ArrowLink>
      </div>

      {/* link groups */}
      <div className="mx-auto my-[80px] w-[90vw] max-w-[1200px] min-[500px]:items-start md:flex lg:w-[85vw]">
        {LINK_GROUPS.map((group) => (
          <div
            key={group.title}
            className="mb-8 flex flex-1 flex-col items-center justify-center px-4 min-[500px]:items-start"
          >
            <div className="mb-4 md:w-full">{group.title}</div>
            <ul>
              {group.links.map((label) => (
                <li key={label} className="pt-1 pb-3">
                  <Link
                    href="#"
                    className="block w-full text-center text-link hover:text-white hover:underline min-[500px]:text-start"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* copyright */}
      <div className="mb-6 flex max-w-[1200px] flex-col items-center min-[500px]:items-start min-[500px]:px-[5vw]">
        <ClayLogo className="h-8" />
        <div className="mt-4 text-center font-normal min-[500px]:text-start">
          © Clay 2024 / Uplevel your data enrichment. Scale personalized
          outreach.
        </div>
        <p className="mt-4 text-center text-sm font-normal text-link min-[500px]:text-start">
          Unofficial recreation of clay.com/enterprise for portfolio purposes.
          Not affiliated with Clay Labs.{' '}
          <a
            href="https://github.com/ashaldenkov/enterprise-landing"
            className="underline hover:text-white"
          >
            Source on GitHub
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
