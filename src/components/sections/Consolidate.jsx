import { LazyVideo } from '@/components/ui/LazyVideo'

export default function Consolidate() {
  return (
    <section className="container-page py-[48px] md:py-[64px] lg:flex lg:py-[96px]">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Consolidate your enrichment tools for better data quality at lower
          costs
        </h2>
        <p className="mt-4">
          Our marketplace of 75+ integrations and our AI research agent can
          drastically improve your data foundation—and cut the time SDRs spend
          on manual work.
        </p>
      </div>
      <div className="h-fit rounded-[13px] border p-[7px]">
        <LazyVideo
          src="/videos/find-phone-number.mp4"
          width={1728}
          height={1080}
          aria-label="Clay finding a phone number for a contact"
        />
      </div>
    </section>
  )
}
