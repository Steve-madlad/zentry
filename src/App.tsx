import About from '@comps/About';
import Contact from '@comps/Contact';
import Footer from '@comps/Footer';
import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import BlackSection from './components/BlackSection';
import './index.css';

export function App() {
  return (
    <main>
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
