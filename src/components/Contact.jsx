import Button from "./custom/Button"
import contact1 from "@public/img/contact-1.webp"
import contact2 from "@public/img/contact-2.webp"
import swordmanPartial from "@public/img/swordman-partial.webp"
import swordman from "@public/img/swordman.webp"

export default function Contact() {
  return (
    <div className="my-20 min-h-96 width-screen px-10" id="contact">
      <div className="relative rounded-lg bg-black py-24 text-lavender-mist sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox className="contact-clip-path-1" src={contact1} />
          <ImageClipBox className="contact-clip-path-2 lg:translate-y-40 tranlate-y-60" src={contact2} />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox className="absolute md:scale-125" src={swordmanPartial} />
          <ImageClipBox className="sword-man-clip-path md:scale-125" src={swordman} />
        </div>

        <div className="col-center text-center">
          <p className="font-general text-[10px] uppercase">join zentry</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether</p>

          <Button className="mt-10 bg-sky-cyan py-5">contact us</Button>
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