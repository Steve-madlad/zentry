import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function AnimatedTitle({
  title,
  id,
  className,
}: {
  title: string;
  id: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} id={id} className={`animated-title ${className}`}>
      {title.split('<br/>').map((word, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {word.split(' ').map((letter, index) => (
            <span
              key={index}
              className="animated-word special-font"
              dangerouslySetInnerHTML={{ __html: letter }}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
}
