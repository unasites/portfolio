import PageContainer from "@/layout/PageContainer";
import VisualShowcase from "./VisualShowcase";

const FeaturedWorkSection = () => {
  return (
    <section className="relative flex xl:items-center xl:flex-row flex-col-reverse z-2 overflow-y-visible w-full py-20 lg:py-38">
      <PageContainer>
        <div className="flex items-center">
          <div className="lg:max-w-lg">
            <h2 className="max-w-lg text-5xl xl:text-6xl font-normal bg-text-gradient bg-clip-text text-transparent">
              We turn ideas into websites that push your business ahead.
            </h2>
          </div>
        </div>
      </PageContainer>
      <VisualShowcase />
    </section>
  );
};

export default FeaturedWorkSection;
