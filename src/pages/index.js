import Header from '@/components/header'
import Intro from '@/components/intro'
import { useState } from 'react';


export default function Home() {
  const [scrollBlock, setScrollBlock] = useState(false);

  return (
    <div className='font-sans font-medium'>
        <Header setScrollBlock={setScrollBlock}/>
        {/* main made for scrollblock class on mobile menu open */}
        <main className={`${scrollBlock ? 'fixed' : ''}`}>
          <Intro/>
        </main>
    </div>
  );
}
