import Header from '@/components/header'
import Footer from '@/components/footer'
import Learning from '@/components/learning'
import Reviews from '@/components/reviews'
import Integration from '@/components/integration'
import Options from '@/components/options'
import Intro from '@/components/intro'
import { useState } from 'react';
import Features from '@/components/features'
import CustomersSay from '@/components/customersSay'


export default function Home() {
  const [scrollBlock, setScrollBlock] = useState(false);

  return (
    <div className='font-sans font-medium'>
        <Header setScrollBlock={setScrollBlock}/>
        {/* main made for scrollblock class on mobile menu open */}
        <main className={`${scrollBlock ? 'fixed' : ''}`}>
          <Intro/>
          <Options/>
          <Features/>
          <Integration/>
          <Reviews/>
          <CustomersSay/>
          <Learning/>
          <Footer/>
        </main>
    </div>
  );
}
