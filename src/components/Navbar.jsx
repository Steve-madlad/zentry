import { useEffect, useRef, useState } from 'react';
import navLogo from '@public/img/logo.png';
import Button from './custom/Button';
import { MousePointer2 } from 'lucide-react';
import audio from '@public/audio/loop.mp3';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

export default function Navbar() {
  const navContainer = useRef(null);
  const navItems = ['Nexus', 'About', 'Vault', 'Prologue', 'Contact'];

  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioElementRef = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainer.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainer.current.classList.remove('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainer.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (isAudioPlaying) audioElementRef.current.play();
    else audioElementRef.current.pause();
  }, [isAudioPlaying]);

  useEffect(() => {
    gsap.to(navContainer.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsIndicatorActive((prev) => !prev);
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <div
      ref={navContainer}
      className="fixed inset-x-1 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex-between size-full p-4">
          <div className="align-center gap-7">
            <div className="align-center gap-3">
              <img src={navLogo} alt="logo" className="w-10" />
              <p className="special-font text-lg text-white md:hidden">
                <b>Zentry</b>
              </p>
            </div>

            {/* <Button asChild className="bg-lavender-mist gap-2">
              <a className='flex-center gap-2' href="#vault">Products <MousePointer2 className="-scale-x-100" fill="black" /></a>
            </Button> */}
            <p className="special-font font-zentry text-white text-3xl"><b>Z</b>e<b>n</b>try</p>
          </div>

          <div className="align-center h-full">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a key={index} href={`#${item.toLocaleLowerCase()}`} className="nav-hover-btn">
                  {item}
                </a>
              ))}
            </div>

            <Button
              className="align-center ml-7 space-x-0.5 rounded-full bg-transparent p-2"
              onClick={toggleAudioIndicator}
            >
              <audio ref={audioElementRef} className="hidden" loop src={audio}></audio>
              {[...Array(4)].map((bar, index) => (
                <div
                  key={index}
                  className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
              ))}
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
