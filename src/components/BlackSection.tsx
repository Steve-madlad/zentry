import { useGSAP } from '@gsap/react';
import BentoGrid from './BentoGrid';
import Story from './Story';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

export default function BlackSection({ onPriorityLoad }: { onPriorityLoad: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const overlayTop = containerRef.current?.querySelector('.black-overlay-top');
      const overlayBottom = containerRef.current?.querySelector('.black-overlay-bottom');

      if (!overlayTop || !overlayBottom) return;

      const tl = gsap.timeline({ paused: true });

      const glowTop = containerRef.current?.querySelector('.purple-glow-top');
      const glowBottom = containerRef.current?.querySelector('.purple-glow-bottom');

      CustomEase.create('blazeEnd', '0.58, 0.1, 1, 1');
      tl.to(
        [overlayTop, overlayBottom],
        {
          clipPath: (i) => (i === 0 ? 'circle(150% at 50% 0%)' : 'circle(150% at 50% 100%)'),
          duration: 1,
          ease: 'blazeEnd',
          stagger: 0.08,
        },
        0,
      ).to(
        [glowTop, glowBottom],
        {
          opacity: 0.6,
          scaleY: 1.5,
          duration: 0.8,
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
        },
        0.5,
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        end: 'top top',
        onEnter: () => tl.play(),
        onLeaveBack: () => {
          gsap.to(tl, {
            progress: 0,
            duration: 0.4,
            ease: 'expo.out',
            onComplete: () => {
              tl.pause(0);
            },
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white">
      <div className="purple-glow-top absolute inset-0 z-0 bg-black/30 opacity-0 blur-[100px]" />
      <div className="purple-glow-bottom absolute inset-0 z-0 bg-black/30 opacity-0 blur-[100px]" />

      <div
        className="black-overlay-top absolute inset-0 z-0 bg-black"
        style={{ clipPath: 'circle(0% at 50% 0%)' }}
      />
      <div
        className="black-overlay-bottom absolute inset-0 z-0 bg-black"
        style={{ clipPath: 'circle(0% at 50% 100%)' }}
      />

      <div className="content-wrapper isolation-auto">
        <BentoGrid onPriorityLoad={onPriorityLoad} />
        <Story />
      </div>
    </div>
  );
}
