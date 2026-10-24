import Link from 'next/link'
import { ClayLogo } from '@/components/ui/ClayLogo'
import { ContactButton } from '@/components/ui/ContactButton'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

// width holds full class strings so Tailwind can detect them
const NAVIGATION = [
  {
    label: 'Product',
    groups: [
      {
        title: 'Recurring workflows',
        width: 'w-[320px]',
        items: [
          {
            title: 'CRM enrichment & hygiene',
            description:
              'Connect to and auto-update your CRM as a source of truth',
            icon: '/images/icons/data.avif',
          },
          {
            title: 'TAM sourcing',
            description: 'Build targeted lead lists using 10+ sources and AI',
            icon: '/images/icons/list.avif',
          },
          {
            title: 'Automated inbound',
            description:
              'Connect to your webforms and auto-enrich and score leads',
            icon: '/images/icons/outbound.avif',
          },
          {
            title: 'Automated outbound',
            description: 'Build, enrich, score, and message leads in seconds',
            icon: '/images/icons/inbound.avif',
          },
          {
            title: 'Intent data',
            description: 'Track job changes, new hires, promotions, and more',
            icon: '/images/icons/claymation.avif',
          },
        ],
      },
      {
        title: 'Features',
        width: 'w-[320px]',
        items: [
          {
            title: 'Integrations',
            description:
              'Access 50+ databases to get the most comprehensive coverage of information',
            icon: '/images/icons/wire.avif',
          },
          {
            title: 'Multi-provider data enrichment',
            description:
              'Search multiple providers sequentially to maximize data quality and coverage',
            icon: '/images/icons/wave.avif',
          },
          {
            title: 'AI research agent',
            description:
              'Ask our agent to search websites and find all the answer to your questions',
            icon: '/images/icons/circle.avif',
          },
          {
            title: 'Personalized copywriting',
            description:
              'Use our AI email builder to write & send personalized emails that convert',
            icon: '/images/icons/glass.avif',
          },
        ],
      },
      {
        title: 'Quick links',
        width: 'w-[240px]',
        links: ['Templates', 'Chrome Extension', 'Changelog', 'Security'],
      },
    ],
  },
  {
    label: 'Solutions',
    groups: [
      {
        title: 'Clay for',
        width: 'w-[320px]',
        items: [
          {
            title: 'RevOps',
            description: 'Prospect, enrich, and clean your CRM automatically',
            icon: '/images/icons/revops.avif',
          },
          {
            title: 'SDRs',
            description:
              'Grow pipeline faster by targeting and enriching your prospects in seconds',
            icon: '/images/icons/sdr.avif',
          },
          {
            title: 'Enterprise',
            description: 'Build the data foundation for any GTM workflow',
            icon: '/images/icons/integrations.avif',
          },
        ],
      },
      {
        title: 'Customer solutions',
        width: 'w-[576px]',
        stories: [
          {
            title:
              'How Verkada’s growth team uses Clay to launch targeted ABM campaigns across LinkedIn, email, and direct mail',
            image: '/images/case-studies/verkada.avif',
          },
          {
            title:
              'How Anthropic uses Clay to 3x their enrichment coverage—with no manual work',
            image: '/images/case-studies/anthropic.avif',
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    groups: [
      {
        title: 'Recurring workflows',
        width: 'w-[640px] max-[1300px]:w-[480px]',
        columns: 2,
        items: [
          {
            title: 'University',
            description: 'Learn how to use Clay with our best resources',
            icon: '/images/icons/university.avif',
          },
          {
            title: 'Templates',
            description:
              'Jumpstart your outbound campaigns with our top templates',
            icon: '/images/icons/folders.avif',
          },
          {
            title: 'Experts',
            description: 'Need help scaling your outbound? Hire a Clay expert',
            icon: '/images/icons/start.avif',
          },
          {
            title: 'Blog',
            description:
              'Read our best guides for outbound, from email setup to AI copywriting',
            icon: '/images/icons/blog.avif',
          },
          {
            title: 'Claybooks',
            description: 'Build powerful workflows with Clay and other tools',
            icon: '/images/icons/claybooks.avif',
          },
          {
            title: 'Slack community',
            description:
              'Join our Slack for live support and a community of 15K+ sales experts!',
            icon: '/images/icons/slack.avif',
          },
        ],
      },
      {
        title: 'Additional help',
        width: 'w-[320px] max-[1300px]:w-[240px]',
        items: [
          { title: 'Getting started', icon: '/images/icons/arrow.avif' },
          { title: 'Creators', icon: '/images/icons/creators.avif' },
          { title: 'Live events', icon: '/images/icons/events.avif' },
          {
            title: 'Integration partners',
            icon: '/images/icons/integrations.avif',
          },
          { title: 'FAQ', icon: '/images/icons/faq.avif' },
          { title: 'YouTube', icon: '/images/icons/youtube.avif' },
        ],
      },
      {
        title: 'Tools',
        width: 'w-[240px] max-[1300px]:w-[180px]',
        links: [
          'Headcount finder',
          'WHOIS lookup',
          'Job board',
          'Headcount directory',
        ],
      },
    ],
  },
  {
    label: 'Company',
    groups: [
      {
        title: 'Our company',
        width: 'w-[640px]',
        columns: 2,
        items: [
          {
            title: 'Careers',
            description: 'Learn about our team – and apply to join us',
            icon: '/images/icons/career.avif',
          },
          {
            title: 'Customer stories',
            description:
              'Read about how our biggest customers use (& love) Clay',
            icon: '/images/icons/heart.avif',
          },
        ],
      },
      {
        title: 'Social media',
        width: 'w-[320px]',
        items: [
          { title: 'LinkedIn', icon: '/images/icons/linkedin.avif' },
          { title: 'YouTube', icon: '/images/icons/youtube.avif' },
        ],
      },
    ],
  },
  { label: 'Enterprise' },
  { label: 'Pricing' },
]

export default function Header() {
  return (
    <header className="relative z-20 flex h-[76px] w-full items-center justify-between border-b bg-white px-2 text-sm lg:fixed lg:h-[64px] lg:px-6">
      <Link href="/" className="flex items-center px-2">
        <ClayLogo preload className="h-7" />
      </Link>

      <DesktopNav items={NAVIGATION} />

      <div className="flex items-center">
        <Link href="#" className="group mx-6 max-md:hidden">
          Login
          <span className="block h-px max-w-0 bg-black transition-all duration-300 group-hover:max-w-full" />
        </Link>
        <MobileMenu items={NAVIGATION} />
        <ContactButton />
      </div>
    </header>
  )
}
