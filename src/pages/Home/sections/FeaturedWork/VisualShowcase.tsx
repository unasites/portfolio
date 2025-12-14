import strenx from "@/assets/VisualShowcase/strenx.png";
import unaOld from "@/assets/VisualShowcase/una-old.png";
import white from "@/assets/VisualShowcase/white.png";

type ShowcaseImage = {
  src: string;
  rotate: number;
  x: string;
  y: string;
  z: number;
};

const images: ShowcaseImage[] = [
  { src: strenx, rotate: 0, x: "14%", y: "-8%", z: 3 },
  { src: unaOld, rotate: -6, x: "0%", y: "-20%", z: 2 },
  { src: white, rotate: 4, x: "8%", y: "24%", z: 1 },
];

const VisualShowcase = () => {
  return (
    <div className="relative h-[520px] w-[900px]">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            transform: `translate(${img.x}, ${img.y})`,
            rotate: `${img.rotate}deg`,
            zIndex: img.z,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-xl
            shadow-2xl
            will-change-transform
          "
        />
      ))}
    </div>
  );
};

export default VisualShowcase;
