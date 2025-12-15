// import strenx from "@/assets/VisualShowcase/strenx.png";
// import unaOld from "@/assets/VisualShowcase/una-old.png";
// import white from "@/assets/VisualShowcase/white.png";

type ShowcaseImage = {
  src: string;
  rotate: number;
  x: string;
  y: string;
  z: number;
};

const images: ShowcaseImage[] = [
  { src: "http://placehold.co/700x520", rotate: 0, x: "0%", y: "-8%", z: 3 },
  { src: "http://placehold.co/700x520", rotate: -15, x: "60%", y: "30%", z: 2 },
  { src: "http://placehold.co/700x520", rotate: 15, x: "60%", y: "-30%", z: 1 },
];

const VisualShowcase = () => {
  return (
    <div className="relative h-130 w-225">
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
            h-130
            w-175
            -translate-x-1/2
            -translate-y-1/2
            rounded-xl
            shadow-[0_0_100px_16px_rgba(26,26,26,0.5)]
            will-change-transform
          "
        />
      ))}
    </div>
  );
};

export default VisualShowcase;
