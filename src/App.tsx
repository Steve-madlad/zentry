import About from '@comps/About';
import Contact from '@comps/Contact';
import Footer from '@comps/Footer';
import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import { useEffect, useState } from 'react';
import BlackSection from './components/BlackSection';
import './index.css';

export function App() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const totalPriorityAssets = 7;

  const handleAssetLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log({ loadedCount });

    if (loadedCount >= totalPriorityAssets) {
      setIsLoading(false);
      document.body.style.overflowY = 'unset';
    } else {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [loadedCount, totalPriorityAssets]);

  return (
    <main className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <Navbar />
      <Hero onPriorityLoad={handleAssetLoad} />
      <About onPriorityLoad={handleAssetLoad} />
      <div className="-mt-40">
        <BlackSection onPriorityLoad={handleAssetLoad} />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
