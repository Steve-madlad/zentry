import { ArrowUpRight, Twitch, Twitter, Youtube } from 'lucide-react';
import Button from './custom/Button';
import { RiDiscordLine } from 'react-icons/ri';
import { FaRegHandPointer } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { title: 'Explore', links: ['Games', 'Leaderboards', 'Tournaments', 'Marketplace'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Press Kit', 'Contact'] },
    { title: 'Resources', links: ['Documentation', 'API', 'Brand Assets', 'Community'] },
  ];

  const socialLinks = [
    { Icon: Twitter, href: '#' },
    { Icon: Twitch, href: '#' },
    { Icon: RiDiscordLine, href: '#', size: 21 },
    { Icon: Youtube, href: '#', size: 23 },
  ];

  const UiBackgroundText = 'ZENTRY';

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add('(min-width: 768px)', () => {
      gsap.to('.footer-text', {
        y: '-100%',
        stagger: 0.12,
        duration: 0.4,
        ease: 'back.out',
        scrollTrigger: {
          trigger: '#footer-content',
          start: 'center+=150 bottom',
          toggleActions: 'restart none none none',
        },
      });
    });

    media.add('(max-width: 767px)', () => {
      gsap.to('.footer-text', {
        y: '-120%',
        stagger: 0.12,
        duration: 0.4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '#footer',
          start: 'bottom-=100 bottom',
          toggleActions: 'restart none none none',
        },
      });
    });
  });

  return (
    <div className="selection:bg-electric-violet font-general-sans flex min-h-100 w-full flex-col justify-end bg-black text-white selection:text-white">
      <div className="via-electric-violet h-px w-full bg-linear-to-r from-transparent to-transparent opacity-50" />

      <footer
        id="footer"
        className="from-electric-violet/65 via-electric-violet/80 to-electric-violet relative overflow-hidden bg-linear-to-b px-6 pt-20 pb-10 md:px-12 lg:px-24"
      >
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-[120px]" />
          <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-cyan-400 blur-[100px]" />
        </div>

        <div id="footer-content" className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="space-y-4">
              <h2 className="special-font font-zentry text-5xl leading-none font-black uppercase md:text-7xl">
                ga<b>m</b>ers <br /> <b>A</b>riz<b>e</b>
              </h2>
              <p className="max-w-md text-lg font-medium text-white/80">
                Join the next generation of competitive gaming. Forge your legacy and redefine what
                it means to be a gamer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="group text-electric-violet flex items-center gap-2 rounded-full bg-white px-8 py-5 font-bold transition-transform hover:scale-105">
                JOIN THE FREY
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Button>
              <Button className="rounded-full border border-white/30 bg-black/20 px-8 py-5 font-bold text-white backdrop-blur-md transition-all hover:bg-black/30">
                LAUNCH APP
              </Button>
            </div>
          </div>

          <div className="mb-20 grid grid-cols-2 gap-12 gap-x-8 lg:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-6 text-3xl font-black tracking-tighter uppercase">Zentry</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, size }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="group hover:text-electric-violet flex-center size-10 rounded-xl border border-white/10 bg-white/10 transition-all hover:bg-white"
                  >
                    <Icon size={size || 18} />
                  </a>
                ))}
              </div>
            </div>

            {navLinks.map((section) => (
              <div key={section.title} className="max-w-56">
                <h4 className="mb-6 text-sm font-bold tracking-widest text-white/60 uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href={link === 'Contact' ? `#contact` : '#'}
                        className="group flex items-center text-white transition-colors hover:text-cyan-300"
                      >
                        <span className="mr-0 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:mr-2 group-hover:w-4"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-10 md:flex-row">
            <div className="flex items-center gap-8 text-sm font-medium text-white/60">
              <p>© 2024 Zentry. All Rights Reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>

            <Button
              onClick={scrollToTop}
              shiftAnimation={false}
              className="group flex h-fit items-center gap-3 bg-transparent text-sm font-bold tracking-widest text-white uppercase"
            >
              Back on Top
              <div className="group-hover:text-electric-violet flex size-9 items-center justify-center rounded-full transition-all group-hover:bg-white md:size-11 md:border md:border-white/30">
                <FaRegHandPointer className="size-3.5 md:size-5" />
              </div>
            </Button>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 translate-y-full opacity-10 select-none">
          <h1 className="flex text-[20vw] leading-none font-black tracking-tighter whitespace-nowrap text-white">
            {UiBackgroundText.split('').map((word, i) => {
              return (
                <div className="footer-text" key={i}>
                  {word}
                </div>
              );
            })}
          </h1>
        </div>
      </footer>
    </div>
  );
}
