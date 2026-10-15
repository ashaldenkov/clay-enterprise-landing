import Image from 'next/image'
import { asset } from '@/lib/cdn'

const CUSTOMER_LOGOS = [
  {
    name: 'Intercom',
    src: asset('66dac2913afacf1bcac1a936_img-logo-intercom.svg'),
  },
  {
    name: 'Verkada',
    src: asset('66dac29242c23ab5f82e0189_img-logo-verkada.svg'),
  },
  { name: 'Brex', src: asset('66dac29242c23ab5f82e016f_img-logo-brex.svg') },
  {
    name: 'Notion',
    src: asset('66dac292f8c407c51112b161_img-logo-notion.svg'),
  },
  { name: 'Vanta', src: asset('66dac292f8c407c51112b18c_img-logo-vanta.svg') },
  {
    name: 'Replit',
    src: asset('66dac298a8e9a9049594eb17_img-logo-replit.svg'),
  },
  {
    name: 'Anthropic',
    src: asset('66dacb4608a223faada2fd6f_img-logo-anthropic.svg'),
  },
  { name: 'Ramp', src: asset('66dac291bafa65b8a43918f9_img-logo-ramp.svg') },
  {
    name: 'Hightouch',
    src: asset('66dac291fff0c4b20c048d39_img-logo-hightouch.svg'),
  },
  {
    name: 'Mercury',
    src: asset('66dac292f072700e680de76b_img-logo-mercury.svg'),
  },
  { name: 'dbt', src: asset('66dac291cb51116e451a2ab9_img-logo-dbt.svg') },
  { name: 'Hex', src: asset('67000350065dd5dd52ad3dd3_img-logo-hex.svg') },
  {
    name: 'Dropbox',
    src: asset('67000350cad1e3770226ada6_img-logo-dropbox.svg'),
  },
  { name: 'Deel', src: asset('66dac291da8ca070ebbbaca6_img-logo-deel.svg') },
  {
    name: 'Grafana Labs',
    src: asset('66dac291a371e5308122736e_img-logo-grafana.svg'),
  },
  { name: 'Sigma', src: asset('66dac2925f1b5771d68ce8b1_img-logo-sigma.svg') },
  {
    name: 'Square',
    src: asset('66dac291734995402ab0607c_img-logo-square.svg'),
  },
  {
    name: 'LaunchDarkly',
    src: asset('66dac291303e9ead2e73dd9f_img-logo-launchdarkly.svg'),
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
