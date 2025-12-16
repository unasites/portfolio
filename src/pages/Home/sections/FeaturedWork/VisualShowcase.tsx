import strenx from "@/assets/VisualShowcase/strenx.png";
import unaOld from "@/assets/VisualShowcase/una-old.png";
import white from "@/assets/VisualShowcase/white.png";

type ShowcaseImage = {
  src: string;
  z: number;
  className: string;
};

const images: ShowcaseImage[] = [
  {
    src: strenx,
    z: 30,
    className: `
      translate-x-[0%]
      translate-y-[0%]
      rotate-0

      xl:translate-y-[0%]
    `,
  },
  {
    src: unaOld,
    z: 10,
    className: `
      translate-x-[40%]
      translate-y-[-30%]
      rotate-15

      xl:translate-x-[0%]
      xl:translate-y-[0%]
      xl:-rotate-[15deg]
    `,
  },
  {
    src: white,
    z: 20,
    className: `
      translate-x-[40%]
      translate-y-[50%]
      -rotate-15

      xl:translate-x-[0%]
      xl:translate-y-[0%]
      xl:rotate-[15deg]
    `,
  },
];

const VisualShowcase = () => {
  return (
    <div className="relative  xl:w-225 h-70 sm:h-100 md:h-130 xl:h-160 w-screen sm:w-150  md:w-160 px-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ zIndex: img.z }}
          className={`
            absolute
            xl:left-1/2
            xl:top-1/2
            xl:-translate-x-1/2
            xl:-translate-y-1/2
            h-auto
            w-[calc(100%-3rem)]

            sm:h-110
            sm:w-150
            md:h-120
            md:w-160
        
            rounded-xl
            transition-transform
            duration-500
            ease-out
            will-change-transform
            ${img.className}
          `}
        />
      ))}
    </div>
  );
};

export default VisualShowcase;
