import gridVideo1 from '@public/videos/feature-1.mp4';
import gridVideo2 from '@public/videos/feature-2.mp4';
import gridVideo3 from '@public/videos/feature-3.mp4';
import gridVideo4 from '@public/videos/feature-4.mp4';
import gridVideo5 from '@public/videos/feature-5.mp4';
import { Zap } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="-translate-y-1 bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lavender-mist text-lg">Into the metagame layer</p>
          <p className="text-lavender-mist font-circular max-w-md text-lg opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products
            converge into an interconnected
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={gridVideo1}
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, tprning your activities across Web2 and Web3 games into a rewarding adventure."
            isCommingSoon
          />
        </div>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1! md:row-span-2">
            <BentoCard
              src={gridVideo2}
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection- the IP primed for expansion."
            ></BentoCard>
          </div>

          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1! md:ms-0">
            <BentoCard
              src={gridVideo3}
              title={
                <>
                  n<b>e</b>exus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            ></BentoCard>
          </div>

          <div className="bento-tilt_1 me-14 md:col-span-1! md:me-0">
            <BentoCard
              src={gridVideo4}
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent- elevating your gameplay to be more fun and productive."
            ></BentoCard>
          </div>

          <div className="bento-tilt_2">
            <div className="col-between from-electric-violet/65 via-electric-violet/80 bg-linear-to-l to-electric-violet size-full gap-2 p-5">
              <h1 className="bento-title special-font text-cyan-400 max-w-64">
                m<b>o</b>re co<b>m</b>ing s<b>oo</b>n!
              </h1>
              <Zap className="self-end size-7.5 md:size-12" fill="cyan" color="cyan" />
            </div>
          </div>

          <div className="bento-tilt_2">
            <video
              src={gridVideo5}
              loop
              autoPlay
              muted
              className="size-full object-cover object-center"
            />
          </div>
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
