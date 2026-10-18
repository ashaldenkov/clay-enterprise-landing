import Image from 'next/image'
import { ContactButton } from '@/components/ui/ContactButton'

export default function Team() {
  return (
    <section className="container-page pt-[48px] md:pt-[64px] lg:pt-[96px]">
      <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl">
        Clay in your team
      </h2>
      <div className="mt-6 mb-8 md:flex md:items-end md:justify-between">
        <p className="basis-1/2 max-md:mb-8 md:text-lg lg:text-xl">
          We are the backend data enrichment and orchestration layer that sets
          up your sales team for success.
        </p>
        <ContactButton />
      </div>
      <Image
        src="/images/team/group-visual.webp"
        width={1600}
        height={645}
        sizes="(min-width: 1240px) 1192px, 95vw"
        className="my-10"
        alt=""
      />
    </section>
  )
}
