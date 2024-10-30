import Header from '@/components/header'
import Reviews from '@/components/reviews'
import Integration from '@/components/integration'
import Options from '@/components/options'
import Intro from '@/components/intro'
import { useState } from 'react';
import Features from '@/components/features'


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
        </main>
    </div>
  );
}
