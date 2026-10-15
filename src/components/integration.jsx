import Image from 'next/image'
import { ContactButton } from '@/components/ui/ContactButton'
import { asset } from '@/lib/cdn'
import ClayScreen from '@/images/clayScreen.png'

const Integration = () => {
  return (
    <div className="container-page">
      <div className="py-[16px] md:py-[32px] lg:py-[64px]">
        <div className="lg:flex">
          <div className="mb-8 text-3xl md:text-4xl lg:basis-1/2 lg:text-5xl">
            Clay in your tech stack
          </div>
          <div className="mb-8 md:text-lg lg:basis-1/2 lg:text-xl">
            With a CRM, Clay, and an email sending tool, you’re ready to send
            any outreach campaign.
          </div>
        </div>
        <div className="mt-[48px] flex h-fit w-full items-center justify-center bg-socials">
          <Image src={ClayScreen} width={849} height={502} alt="" />
        </div>
      </div>

      <div className="pt-[48px] md:pt-[64px] lg:pt-[96px]">
        <div>
          <div className="mb-3 text-3xl md:text-4xl lg:text-5xl">
            Clay in your team
          </div>
          <div className="mt-6 mb-8 md:flex md:items-end md:justify-between">
            <div className="basis-1/2 max-md:mb-8 md:text-lg lg:text-xl">
              We are the backend data enrichment and orchestration layer that
              sets up your sales team for success.
            </div>
            <ContactButton />
          </div>
        </div>
        <Image
          src={asset('667c38e1c437b5d2780211da_group-visual-leads.webp')}
          width={1600}
          height={645}
          sizes="(min-width: 1240px) 1192px, 95vw"
          className="my-10"
          alt=""
        />
      </div>
    </div>
  )
}

export default Integration
