import About from '@comps/About';
import BentoGrid from '@comps/BentoGrid';
import Contact from '@comps/Contact';
import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import Story from '@comps/Story';
import './index.css';

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <Story />
      <Contact />
    </main>
  );
}

export default App;
