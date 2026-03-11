import gridVideo1 from '@public/videos/feature-1.mp4';
import gridVideo2 from '@public/videos/feature-2.mp4';
import gridVideo3 from '@public/videos/feature-3.mp4';
import gridVideo4 from '@public/videos/feature-4.mp4';
import gridVideo5 from '@public/videos/feature-5.mp4';
import { Zap } from 'lucide-react';
import { useRef, useState } from 'react';

export default function BentoGrid() {
  return (
    <section id='vault' className="bg-black pb-20 md:pb-35">
      <div className="container mx-auto px-3 md:px-10 pr-8 md:pr-16 lg:pr-13">
        <div className="px-5 py-32">
          <h1 className="font-zentry font-bold text-lavender-mist text-4xl md:text-6xl">Into the metagame layer</h1>
          <p className="text-lavender-mist font-circular max-w-md text-lg opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience
            on your world.
          </p>
        </div>

        <BentoTilt className="bento-tilt_1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={gridVideo1}
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."

            isCommingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1! md:row-span-2">
            <BentoCard
              src={gridVideo2}
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."

            ></BentoCard>
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1!">
            <BentoCard
              src={gridVideo3}
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."

            ></BentoCard>
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:col-span-1!">
            <BentoCard
              src={gridVideo4}
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."

            ></BentoCard>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="col-between from-electric-violet/65 via-electric-violet/80 to-electric-violet size-full gap-2 bg-linear-to-l p-5">
              <h1 className="bento-title special-font max-w-64 text-[#00ffff]">
                m<b>o</b>re co<b>m</b>ing s<b>oo</b>n!
              </h1>
              <Zap className="size-7.5 self-end md:size-12" fill="cyan" color="cyan" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src={gridVideo5}
              loop
              autoPlay
              muted
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export const BentoCard = ({ src, title, description, isCommingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="col-between text-lavender-mist relative z-10 size-full p-5">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
        </div>
      </div>
      {title}
    </div>
  );
};

export const BentoTilt = ({ children, className }) => {
  const [transformStyle, setTransformStyle] = useState();
  const containerRef = useRef();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX;
    const y = e.clientY;

    const relativeX = (x - rect.left) / rect.width;
    const relativeY = (y - rect.top) / rect.height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={className}
    >
      {children}
    </div>
  );
};
