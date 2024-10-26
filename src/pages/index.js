import Header from '@/components/header'
import { useState } from 'react';


export default function Home() {
  const [scrollBlock, setScrollBlock] = useState(false);

  return (
    <div className='font-sans font-medium'>
        <Header setScrollBlock={setScrollBlock}/>
        {/* main made for scrollblock class on mobile menu open */}
        <main className={`${scrollBlock ? 'fixed' : ''}`}>
        </main>
    </div>
  );
}
