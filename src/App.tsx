import About from '@comps/About';
import BentoGrid from '@comps/BentoGrid';
import Contact from '@comps/Contact';
import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import Story from '@comps/Story';
import './index.css';
import Footer from '@comps/Footer';

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <div className="-mt-40">
        <BentoGrid />
        <Story />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
