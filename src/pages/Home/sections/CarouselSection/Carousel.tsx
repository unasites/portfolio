import clsx from "clsx";
import { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "http://placehold.co/1400x1000?text=Image+1",
    "http://placehold.co/1400x1000?text=Image+2",
    "http://placehold.co/1400x1000?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-2xl md:w-screen h-fit overflow-hidden relative xl:right-30 flex flex-col items-center justify-center gap-4">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            className="h-fit w-full shrink-0 object-fill rounded-2xl"
          />
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              "h-2 w-2 rounded-full transition-colors",
              index === currentIndex ? "bg-white w-4" : "bg-white/50 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
