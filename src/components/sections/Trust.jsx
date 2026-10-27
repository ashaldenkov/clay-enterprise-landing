import Image from 'next/image'
import { ContactButton } from '@/components/ui/ContactButton'
import CustomerLogos from './CustomerLogos'

const G2_BADGES = [
  { src: '/images/badges/g2-best-results.svg', title: 'Best Results' },
  {
    src: '/images/badges/g2-best-relationship.svg',
    title: 'Best Relationship',
  },
  {
    src: '/images/badges/g2-most-implementable.svg',
    title: 'Most Implementable',
  },
  { src: '/images/badges/g2-high-performer.svg', title: 'High Performer' },
]

export default function Trust() {
  return (
    <section className="container-page py-[16px] md:py-[32px] lg:py-[64px]">
      <div className="lg:flex">
        <div className="mb-8 flex flex-col items-center lg:basis-1/2 lg:items-start">
          <h2 className="mb-3 text-center text-3xl md:text-4xl lg:text-start lg:text-5xl">
            A platform & people you can trust
          </h2>
          <ContactButton />
        </div>
        <div className="flex w-full gap-[20px] lg:basis-1/2">
          {G2_BADGES.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              width={108}
              height={140}
              alt={`G2 ${badge.title}, Spring 2024`}
              className="w-[calc((100%-60px)/4)] flex-auto"
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-6 text-center text-xs font-bold uppercase">
          Trusted by more than 100,000 leading GTM teams of all sizes
        </p>
        <CustomerLogos />
      </div>
    </section>
  )
}
