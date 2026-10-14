import CustomersSay from '@/components/customersSay'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Integration from '@/components/integration'
import Intro from '@/components/intro'
import Learning from '@/components/learning'
import Options from '@/components/options'
import Reviews from '@/components/reviews'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Options />
        <Features />
        <Integration />
        <Reviews />
        <CustomersSay />
        <Learning />
        <Footer />
      </main>
    </>
  )
}
