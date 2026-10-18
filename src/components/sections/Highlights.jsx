import Image from 'next/image'

const HIGHLIGHTS = [
  {
    title: 'Flexibility for any campaign',
    description:
      'Program our core components (account/lead lists, data enrichment, and messaging) into end-to-end campaigns for any outreach use case.',
    icon: '/images/icons/flexibility.png',
  },
  {
    title: 'Best data coverage',
    description:
      'Clay consolidates 75+ major enrichment tools into one credit-based marketplace. Our waterfall enrichment feature helps you query multiple tools at once to find any data point.',
    icon: '/images/icons/blog.avif',
  },
  {
    title: 'One data cleanroom',
    description:
      'Use Clay to access any enrichment tool and integrate with your CRM and email sending tool. Never deal with multiple contracts or points of security risk again.',
    icon: '/images/icons/cleanroom.png',
  },
  {
    title: 'Powerful AI research agent',
    description:
      'Automate complex, creative, and manual SDR research with our AI research agent—just provide a list of domains and ask any question.',
    icon: '/images/icons/glass.avif',
  },
]

export default function Highlights() {
  return (
    <section
      aria-label="Clay highlights"
      className="container-page pb-[48px] md:pb-[64px] lg:pb-[96px]"
    >
      <ul className="mt-8 grid auto-rows-fr grid-cols-1 gap-5 min-[500px]:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <li key={item.title} className="border p-4">
            <Image
              src={item.icon}
              width={32}
              height={32}
              alt=""
              className="size-8"
            />
            <h3 className="mt-4 text-xl">{item.title}</h3>
            <p className="mt-4">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
