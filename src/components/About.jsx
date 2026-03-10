import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import aboutimg from '@public/img/about.webp';
import ScrollTrigger from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'top-=150 top',
        end: '+=800',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      y: -150,
      borderRadius: 0,
      ease: 'none',
    });
  });

  return (
    <div id="about" className="min-h-screen">
      <div className="col-center relative mt-36 mb-8 gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">Welcome To zentry</h2>
        <AnimatedTitle
          className="mt-5 text-center text-black!"
          title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure"
        />

        <div className="about-subtext capitalize translate-y-12 md:translate-y-0">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div id="clip" className="h-dvh w-screen relative ">
        <div className="align-start justify-center size-full">
          <div className="mask-clip-path about-image relative overflow-hidden">
            <img
              src={aboutimg}
              alt="about us"
              className="absolute top-0 left-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
