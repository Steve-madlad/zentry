import storyImage from '@public/img/entrance.webp';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import RoundedCorners from './RoundedCorners';
import Button from './custom/Button';

export default function Story() {
  const frameRef = useRef();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: 'power1.inOut',
      })
    }
  };
  const handleMouseMove = (e) => {
    if (!frameRef.current) return;

    const { clientX, clientY } = e;
    const element = frameRef.current;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  return (
    <section id="prologue" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="col-center size-full pb-24 py-10">
        <p className="font-general text-sm uppercase md:text-[10px]">the multiversal world</p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br/>a hidden real<b>m</b>"
            id="#story"
            className="pointer-events-none relative z-10 mt-5 mix-blend-difference"
          />
          {!isMobile ? <div className="story-img-container hidden md:flex">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src={storyImage}
                  onMouseUp={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  alt="entrance"
                  ref={frameRef}
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>

            : <div className="flex-center md:hidden! py-5">
              <img
                src={storyImage}
                onMouseUp={handleMouseLeave}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMove}
                alt="entrance"
                ref={frameRef}
                className="object-contain w-10/12 sm:w-2/3 rounded-lg"
              />
            </div>
          }
        </div>

        <div className="flex w-full md:pl-64 lg:pl-0 justify-center md:me-44 md:-mt-64 lg:justify-end">
          <div className="col-center h-full w-fit md:items-start!">
            <p className="font-circular mt-3 px-3.5 pr-6 max-w-sm text-center text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button id="realm-button" className="mt-5 bg-white py-5">
              discover prolouge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
