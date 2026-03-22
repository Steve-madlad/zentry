import Button from './custom/Button';
import contact1 from '@public/img/contact-1.webp';
import contact2 from '@public/img/contact-2.webp';
import swordmanPartial from '@public/img/swordman-partial.webp';
import swordman from '@public/img/swordman.webp';

export default function Contact() {
  return (
    <div className="flex-center min-h-dvh px-5 py-10 pl-2! sm:px-10!" id="contact">
      <div className="text-lavender-mist relative w-full rounded-lg bg-black lg:overflow-hidden">
        <div className="relative overflow-hidden py-24 pt-40! md:pt-60! lg:pt-24!">
          <div className="-lg:left-13 absolute -bottom-15 -left-25 w-72 rotate-20 overflow-hidden sm:top-0 sm:bottom-auto sm:rotate-0 lg:h-full lg:w-96">
            <ImageClipBox className="contact-clip-path-1" src={contact1} />
            <ImageClipBox
              className="contact-clip-path-2 hidden lg:block lg:translate-y-40"
              src={contact2}
            />
          </div>

          <div className="absolute right-0 bottom-0 block w-60 overflow-hidden md:-top-8 md:bottom-auto lg:hidden">
            <ImageClipBox className="contact-clip-path-2 translate-x-25" src={contact2} />
          </div>

          <div className="col-center text-center">
            <p className="font-general relative z-10 text-[10px] uppercase">join zentry</p>
            <p className="special-font font-zentry relative z-10 mt-10 w-full text-5xl leading-[0.9] md:text-[6rem]">
              let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether
            </p>

            <Button className="mt-10 py-5 text-white">contact us</Button>
          </div>
        </div>

        <div className="absolute -top-40 left-[55%] w-60 -translate-x-1/2 md:-top-35 md:left-[52%] md:w-70 lg:top-20 lg:right-0 lg:left-auto lg:w-80 lg:translate-x-0">
          <ImageClipBox className="absolute origin-right lg:scale-125" src={swordmanPartial} />
          <ImageClipBox className="sword-man-clip-path origin-right lg:scale-125" src={swordman} />
        </div>
      </div>
    </div>
  );
}

export const ImageClipBox = ({ className, src }: { className: string; src: string }) => {
  return (
    <div className={className}>
      <img src={src} />
    </div>
  );
};
