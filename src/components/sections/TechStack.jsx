import Image from 'next/image'
import ClayScreen from '@/images/clayScreen.png'

export default function TechStack() {
  return (
    <section className="container-page py-[16px] md:py-[32px] lg:py-[64px]">
      <div className="lg:flex">
        <h2 className="mb-8 text-3xl md:text-4xl lg:basis-1/2 lg:text-5xl">
          Clay in your tech stack
        </h2>
        <p className="mb-8 md:text-lg lg:basis-1/2 lg:text-xl">
          With a CRM, Clay, and an email sending tool, you’re ready to send any
          outreach campaign.
        </p>
      </div>
      <div className="mt-[48px] flex h-fit w-full items-center justify-center bg-socials">
        <Image src={ClayScreen} width={849} height={502} alt="" />
      </div>
    </section>
  )
}
