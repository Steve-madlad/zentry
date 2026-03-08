import About from '@comps/About';
import Hero from '@comps/Hero';
import './index.css';
import Navbar from '@comps/Navbar';
import BentoGrid from './components/BentoGrid';

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
    </main>
  );
}

export default App;
