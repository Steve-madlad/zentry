import Button from "./custom/Button"
import contact1 from "@public/img/contact-1.webp"
import contact2 from "@public/img/contact-2.webp"
import swordmanPartial from "@public/img/swordman-partial.webp"
import swordman from "@public/img/swordman.webp"

export default function Contact() {
  return (
    <div className="min-h-dvh flex-center pl-2! py-10 px-5 sm:px-10!" id="contact">
      <div className="relative w-full rounded-lg bg-black  text-lavender-mist lg:overflow-hidden">
        <div className="relative pt-40! md:pt-60! lg:pt-24! py-24 overflow-hidden">
          <div className="absolute -left-25 -bottom-15 sm:bottom-auto sm:rotate-0 rotate-20 sm:top-0 lg:h-full w-72 overflow-hidden -lg:left-13 lg:w-96">
            <ImageClipBox className="contact-clip-path-1" src={contact1} />
            <ImageClipBox className="contact-clip-path-2 lg:block hidden lg:translate-y-40" src={contact2} />
          </div>

          <div className="absolute right-0 md:bottom-auto md:-top-8 bottom-0 overflow-hidden lg:hidden block w-60">
            <ImageClipBox className="contact-clip-path-2 translate-x-25" src={contact2} />
          </div>

          <div className="col-center text-center">
            <p className="font-general relative z-10 text-[10px] uppercase">join zentry</p>
            <p className="special-font relative z-10 mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether</p>

            <Button className="mt-10 text-white py-5">contact us</Button>
          </div>
        </div>
        
        <div className="absolute lg:top-20 lg:right-0 left-[55%] md:left-[52%] -translate-x-1/2 lg:left-auto lg:translate-x-0 w-60 -top-40 md:-top-35 md:w-70 lg:w-80 ">
          <ImageClipBox className="absolute lg:scale-125 origin-right" src={swordmanPartial} />
          <ImageClipBox className="sword-man-clip-path lg:scale-125 origin-right" src={swordman} />
        </div>
      </div>
    </div>
  )
}

export const ImageClipBox = ({ className, src }) => {
  return (
    <div className={className}>
      <img src={src} />
    </div>
  )
}