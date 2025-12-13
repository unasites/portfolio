import Orb from "@/components/effects/OrbEffect";
import Button from "@/components/ui/Button/Button";
import PageContainer from "@/layout/PageContainer";

const HeroSection = () => {
  return (
    <section className="relative flex w-full h-full items-center justify-center overflow-hidden">
      <PageContainer
        className="
          relative
          flex flex-col items-center text-center
          gap-6 sm:gap-8
          py-16 sm:py-20 lg:py-28
        "
      >
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div
            className="
              h-[140%] w-[140%]
              sm:h-[160%] sm:w-[160%]
              md:h-[180%] md:w-[180%]
              lg:h-[220%] lg:w-[220%]
            "
          >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>

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

        <p className="max-w-xl text-sm sm:text-base text-text-muted">
          UNA is a site that helps you create powerful websites designed to work
          for you and drive your growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="secondary">
            Contact us
          </Button>
        </div>
      </PageContainer>
    </section>
  );
};

export default HeroSection;
