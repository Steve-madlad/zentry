import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import aboutimg from "@public/img/about.webp";
import ScrollTrigger from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

export default function About() {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })

    clipAnimation.to(".mask-clip-path", {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })
  })
  return (
    <div id="about" className="min-h-screen">
      <div className="col-center relative mt-36 mb-8 gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">Welcome To zentry</h2>
        <AnimatedTitle className="mt-5 text-black! text-center" title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure" />

        <div className="about-subtext capitalize">
          <p>the game of games begins--your life, now an epic MMORPG</p>
          <p>Zentry unites gamers from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img src={aboutimg} alt="about us" className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
}
