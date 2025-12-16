import Orb from "@/components/effects/OrbEffect";
import Button from "@/components/ui/Button/Button";
const HeroSection = () => {
  return (
    <section
      className="relative z-10 flex w-full min-h-[calc(100vh-64px)]
 items-center justify-center px-5 lg:px-0 "
    >
      <div className="hidden absolute -top-[50vh] -bottom-[50vh] left-0 right-0 z-0 lg:flex items-center justify-center pointer-events-none">
        <Orb hoverIntensity={0.5} rotateOnHover hue={0} forceHoverState={false} scale={3.2} />
      </div>

      <div
        className="
          relative
          flex flex-col items-center text-center
          gap-6 sm:gap-8
          py-16 sm:py-20 lg:py-28
           w-full max-w-5xl
        "
      >
        <div className="flex flex-col items-center">
          <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Let&apos;s build.
          </h1>
          <h1
            className="
              font-bold leading-tight
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              bg-primary-gradient bg-clip-text text-transparent
            "
          >
            Extraordinary.
          </h1>
        </div>

        <p className="md:max-w-lg text-sm sm:text-base text-text-muted">
          UNA is a site that helps you create powerful websites designed to work for you and drive
          your growth.
        </p>

        <div className="flex flex-col sm:flex-row  max-w-full w-full lg:max-w-none items-center gap-4 justify-center">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
