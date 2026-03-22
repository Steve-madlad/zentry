import About from '@comps/About';
import Contact from '@comps/Contact';
import Footer from '@comps/Footer';
import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import { useEffect, useState } from 'react';
import BlackSection from './components/BlackSection';
import { CriticalPreloadOverlay } from './components/CriticalPreloadOverlay';
import { preloadCriticalAssets } from './lib/criticalAssets';
import './index.css';

export function App() {
  const [criticalReady, setCriticalReady] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    let cancelled = false;

    preloadCriticalAssets()
      .catch(() => {
        /* allow app to show even if an asset fails */
      })
      .finally(() => {
        if (!cancelled) {
          setCriticalReady(true);
          document.body.style.overflowY = '';
        }
      });

    return () => {
      cancelled = true;
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <main>
      {!criticalReady && <CriticalPreloadOverlay />}
      <Navbar />
      <Hero />
      <About />
      <div className="-mt-40">
        <BlackSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
