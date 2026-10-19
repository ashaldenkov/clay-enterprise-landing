import Image from 'next/image'
import { ArrowLink } from '@/components/ui/ArrowLink'
import { Carousel } from '@/components/ui/Carousel'

const RESOURCES = [
  {
    title: 'Clay University',
    description:
      'Master Clay in a few core lessons. Uplevel your data enrichment, craft better outbound messages, and book more meetings.',
    cta: 'Learn with Clay',
    image: {
      src: '/images/resources/university.avif',
      width: 800,
      height: 483,
    },
  },
  {
    title: 'Go to market blog',
    description:
      'Our best content on growing your GTM motion, from outbound sales automation to AI lead generation.',
    cta: 'Explore our blog',
    image: {
      src: '/images/resources/blog.webp',
      width: 800,
      height: 639,
    },
  },
  {
    title: 'Integrations',
    description:
      'Browse through all the integrations you can connect to Clay in seconds and discover what you can do!',
    cta: 'Check integrations',
    image: {
      src: '/images/resources/integrations.webp',
      width: 800,
      height: 490,
    },
  },
  {
    title: 'Templates',
    description: 'Power your outbound campaigns with our best templates.',
    cta: 'Visit Clay templates',
    image: {
      src: '/images/resources/templates.webp',
      width: 800,
      height: 504,
    },
  },
  {
    title: 'Clay Experts',
    description:
      'Hire a Clay Enterprise expert or find a Clay partner to help with your next project',
    cta: 'Explore Clay experts',
    image: {
      src: '/images/resources/experts.webp',
      width: 500,
      height: 312,
    },
  },
  {
    title: 'Clay’s Chrome extension',
    description:
      'Clay’s Chrome Extension makes it wicked easy to find leads almost anywhere on the internet',
    cta: 'Explore Chrome Extension',
    image: {
      src: '/images/resources/chrome-extension.webp',
      width: 500,
      height: 312,
    },
  },
]

export default function Resources() {
  return (
    <section className="mx-auto max-w-[1240px]">
      <Carousel
        heading={
          <div className="mb-8 basis-[50%]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Learn with our resources
            </h2>
            <p className="mt-4 md:text-lg lg:text-xl">
              Check out Clay University, read our GTM blog, or try out our top
              templates to transform your growth ideas into outreach in minutes.
            </p>
          </div>
        }
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-5 pt-8 pb-16 md:px-8 md:pt-24 md:pb-32 lg:px-9 lg:pt-16 lg:pb-24"
      >
        {RESOURCES.map((item) => (
          <div
            key={item.title}
            className="h-[397px] w-full rounded-lg border border-inactiveTabsBorder bg-borderBg p-2 transition-shadow duration-400 lg:hover:shadow-[0_50px_80px_-40px_#0006]"
          >
            <div className="flex h-full w-full flex-col justify-between rounded-sm border border-inactiveTabsBorder bg-white p-4">
              <div className="mb-4 h-[146px] w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                  alt=""
                />
              </div>
              <h3 className="mb-4 text-2xl">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <ArrowLink
                variant="text"
                className="mt-auto text-sm whitespace-nowrap"
              >
                {item.cta}
              </ArrowLink>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}
