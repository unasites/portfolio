import VisualShowcase from "./VisualShowcase";

const FeaturedWorkSection = () => {
  return (
    <section className="relative z-2 overflow-x-hidden overflow-y-visible w-full py-20 lg:py-38">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex items-center">
            <div className="lg:max-w-lg">
              <h2 className="max-w-lg text-6xl font-normal bg-text-gradient bg-clip-text text-transparent">
                We turn ideas into websites that push your business ahead.
              </h2>
            </div>
          </div>

          <div className="pointer-events-none">
            <VisualShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
