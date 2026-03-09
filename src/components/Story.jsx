import storyImage from '@public/img/entrance.webp';
import gsap from 'gsap';
import { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import RoundedCorners from './RoundedCorners';
import Button from './custom/Button';

export default function Story() {
  const frameRef = useRef();

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
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="col-center size-full pb-24 py-10">
        <p className="font-general text-sm uppercase md:text-[10px]">the multiversal world</p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br/>a hidden real<b>m</b>"
            id="#story"
            className="pointer-events-none relative z-10 mt-5 mix-blend-difference"
          />
          <div className="story-img-container">
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
        </div>

        <div className="-mt-80 flex w-full justify-center md:me-44 md:-mt-64 md:justify-end">
          <div className="col-center h-full w-fit md:items-start!">
            <p className="font-circular mt-3 max-w-sm text-center text-violet-50 md:text-start">
              Where realms converge, ties and the boundless pillar. Discover it's secrets and shape
              your fate amidst infinite opportunities.
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
