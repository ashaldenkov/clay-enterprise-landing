import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/header/Header'
import Consolidate from '@/components/sections/Consolidate'
import DataTabs from '@/components/sections/DataTabs'
import Hero from '@/components/sections/Hero'
import Highlights from '@/components/sections/Highlights'
import Resources from '@/components/sections/Resources'
import SalesforcePackage from '@/components/sections/SalesforcePackage'
import Team from '@/components/sections/Team'
import TechStack from '@/components/sections/TechStack'
import Testimonials from '@/components/sections/Testimonials'
import Trust from '@/components/sections/Trust'
import UseCases from '@/components/sections/UseCases'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Consolidate />
        <DataTabs />
        <Highlights />
        <UseCases />
        <SalesforcePackage />
        <TechStack />
        <Team />
        <Trust />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </>
  )
}
