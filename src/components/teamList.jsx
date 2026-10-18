import Image from 'next/image'

const CUSTOMER_LOGOS = [
  {
    name: 'Intercom',
    src: '/images/logos/intercom.svg',
  },
  {
    name: 'Verkada',
    src: '/images/logos/verkada.svg',
  },
  { name: 'Brex', src: '/images/logos/brex.svg' },
  {
    name: 'Notion',
    src: '/images/logos/notion.svg',
  },
  { name: 'Vanta', src: '/images/logos/vanta.svg' },
  {
    name: 'Replit',
    src: '/images/logos/replit.svg',
  },
  {
    name: 'Anthropic',
    src: '/images/logos/anthropic.svg',
  },
  { name: 'Ramp', src: '/images/logos/ramp.svg' },
  {
    name: 'Hightouch',
    src: '/images/logos/hightouch.svg',
  },
  {
    name: 'Mercury',
    src: '/images/logos/mercury.svg',
  },
  { name: 'dbt', src: '/images/logos/dbt.svg' },
  { name: 'Hex', src: '/images/logos/hex.svg' },
  {
    name: 'Dropbox',
    src: '/images/logos/dropbox.svg',
  },
  { name: 'Deel', src: '/images/logos/deel.svg' },
  {
    name: 'Grafana Labs',
    src: '/images/logos/grafana.svg',
  },
  { name: 'Sigma', src: '/images/logos/sigma.svg' },
  {
    name: 'Square',
    src: '/images/logos/square.svg',
  },
  {
    name: 'LaunchDarkly',
    src: '/images/logos/launchdarkly.svg',
  },
]

const TeamList = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-x-5 md:grid-cols-6 md:grid-rows-3 lg:grid-cols-9 lg:grid-rows-2">
      {CUSTOMER_LOGOS.map((logo) => (
        <Image
          key={logo.name}
          src={logo.src}
          width={120}
          height={68}
          alt={logo.name}
          className="mx-auto"
        />
      ))}
    </div>
  )
}

export default TeamList
