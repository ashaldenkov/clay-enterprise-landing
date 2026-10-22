'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ContactButton } from '@/components/ui/ContactButton'

const USE_CASES = [
  {
    id: 'inbound',
    label: 'Inbound',
    title: 'Enrich & filter your inbound leads to reach the best prospects',
    description:
      'When you have thousands of inbound leads, you need to quickly prioritize the best fits for your team. Enrich leads with contact info, firmographics, and more — then use AI to draft the perfect outreach. Get to your leads faster.',
    image: {
      src: '/images/use-cases/inbound.webp',
      width: 800,
      height: 375,
    },
    background:
      'bg-[url("/images/backgrounds/blue.webp")] bg-auto bg-position-[left_-10px] bg-no-repeat',
  },
  {
    id: 'outbound',
    label: 'Outbound',
    title: 'Build lists, enrich, and message leads in seconds',
    description:
      'Are you targeting large customers? Use a white glove approach and leverage Clay to keep your CRM updated and automate the prospecting part of going after enterprises.',
    image: {
      src: '/images/use-cases/outbound.webp',
      width: 800,
      height: 375,
    },
    background:
      'bg-[url("/images/backgrounds/pink.webp")] bg-cover bg-position-[left_-10px_center] bg-no-repeat',
  },
]

export default function UseCases() {
  const [useCaseTab, setUseCaseTab] = useState(USE_CASES[0].id)

  return (
    <section className="container-page py-[48px] md:py-[64px] lg:py-[96px]">
      <div className="mb-8">
        <h2 className="mb-2.5 text-center text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          Program our components for any outreach use case
        </h2>
        <p className="text-center md:text-xl">
          Once your data is solid, use it with our AI message writer to help
          generate personalized copy for any campaign: inbound, outbound,
          expansion, retention.
        </p>
      </div>

      <div className="mt-[48px]">
        <div
          role="tablist"
          className="mb-6 flex flex-col gap-4 lg:flex-row lg:gap-8"
        >
          {USE_CASES.map((useCase) => (
            <button
              key={useCase.id}
              id={`${useCase.id}-tab`}
              type="button"
              role="tab"
              aria-selected={useCaseTab === useCase.id}
              aria-controls={`${useCase.id}-panel`}
              className={clsx(
                'h-[50px] w-full rounded-sm border border-inactiveTabsBorder transition-all duration-300 hover:border-gray-300 hover:text-black',
                useCaseTab === useCase.id
                  ? 'bg-borderBg'
                  : 'bg-white text-featureGrey hover:bg-inactiveTabsBorder',
              )}
              onClick={() => setUseCaseTab(useCase.id)}
            >
              {useCase.label}
            </button>
          ))}
        </div>

        <div className="grid items-start">
          {USE_CASES.map((useCase) => {
            const isActive = useCaseTab === useCase.id
            return (
              <div
                key={useCase.id}
                id={`${useCase.id}-panel`}
                role="tabpanel"
                aria-labelledby={`${useCase.id}-tab`}
                inert={!isActive}
                className={clsx(
                  'col-start-1 row-start-1 lg:flex lg:gap-8',
                  isActive
                    ? 'opacity-100 transition-opacity duration-500'
                    : 'invisible opacity-0',
                )}
              >
                <div className="mb-8 flex w-full flex-col rounded-sm border border-gray-300 p-6 md:p-10 lg:basis-1/2 lg:p-[80px]">
                  <h3 className="text-2xl md:text-[32px] md:leading-9">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 mb-6 leading-5">{useCase.description}</p>
                  <ContactButton />
                </div>

                <div
                  className={clsx(
                    'mb-8 flex aspect-square items-center justify-center overflow-hidden lg:basis-1/2',
                    useCase.background,
                  )}
                >
                  <Image
                    src={useCase.image.src}
                    width={useCase.image.width}
                    height={useCase.image.height}
                    sizes="(min-width: 1024px) 540px, 85vw"
                    alt=""
                    className="w-[90%] rounded-xl border border-inactiveTabsBorder bg-[rgba(255,255,255,0.3)] p-2"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
