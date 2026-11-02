import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/header/Header'
import DataCoverage from '@/components/sections/DataCoverage'
import DataTabs from '@/components/sections/DataTabs'
import Hero from '@/components/sections/Hero'
import Highlights from '@/components/sections/Highlights'
import Resources from '@/components/sections/Resources'
import Security from '@/components/sections/Security'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Trust from '@/components/sections/Trust'
import UseCases from '@/components/sections/UseCases'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DataCoverage />
        <DataTabs />
        <Highlights />
        <UseCases />
        <Security />
        <Team />
        <Trust />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </>
  )
}
