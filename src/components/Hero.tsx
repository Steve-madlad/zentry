import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState, type SyntheticEvent } from 'react';
import video1 from '@public/videos/hero-1.mp4';
import video2 from '@public/videos/hero-2.mp4';
import video3 from '@public/videos/hero-3.mp4';
import video4 from '@public/videos/hero-4.mp4';
import Button from './custom/Button';
import VideoPreview from './VideoPreview';
import { Loader2, MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  onPriorityLoad: () => void;
  priorityAssetsReady?: boolean;
};

export default function Hero({ onPriorityLoad, priorityAssetsReady = false }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const slideVideoCount = 3;
  const [slideReadyCount, setSlideReadyCount] = useState(0);
  const skipSlideResetRef = useRef(true);  
  
  const nextVdRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (skipSlideResetRef.current) {
      skipSlideResetRef.current = false;
      return;
    }
    setSlideReadyCount(0);
  }, [currentIndex]);

  const handleVideoLoad = (
    _e: SyntheticEvent<HTMLVideoElement, Event>,
    isPrimaryVideo: boolean = false,
  ) => {
    setSlideReadyCount((prev) => prev + 1);
    isPrimaryVideo && onPriorityLoad();
  };

  const isSlideReady = slideReadyCount >= slideVideoCount;

  const totalVideos = 4;
  const videos = [video1, video2, video3, video4];
  const getVidSrc = (index: number) => {
    const normalized = ((index - 1) % totalVideos + totalVideos) % totalVideos;
    return videos[normalized];
  };

  const handlePreviewClick = () => {
    if (!isSlideReady) return;
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set('#next-video', { visibility: 'visible' });
        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => {
            nextVdRef?.current?.play();
          },
        });
        gsap.from('#current-video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    },
  );

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
      borderRadius: '0% 0% 40% 10%',
    });
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0% 0% 0% 0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  return (
    <div id="nexus" className="relative h-dvh w-screen overflow-x-hidden">
      {priorityAssetsReady && (
        <div
          className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
          aria-hidden
        >
          {videos.map((src, i) => (
            <video key={`hero-prefetch-${i}`} preload="auto" src={src} muted playsInline />
          ))}
        </div>
      )}

      <div
        id="video-frame"
        className="bg-soft-lavender relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handlePreviewClick}
                className={`origin-center relative scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 ${!isSlideReady ? 'pointer-events-none' : ''}`}
              >
                <video
                  ref={nextVdRef}
                  src={getVidSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />

                {!isSlideReady && (
                  <div className="absolute inset-0 flex-center size-full scale-150 bg-white opacity-30">
                    <Loader2 className="animate-spin text-electric-violet" />
                  </div>
                )}
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVidSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVidSrc(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 size-full object-cover object-center"
            onLoadedData={(e) => handleVideoLoad(e, true)}
          />
        </div>

        <h1 className="special-font hero-heading text-soft-lavender absolute right-5 bottom-5 z-40">
          G<b>A</b>MING
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="font-robert-regular mb-5 max-w-64 text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button className="gap-2 text-white">
              <MousePointer2 className="-scale-x-100" fill="black" />
              Watch trailer
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute right-5 bottom-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
}
