import PageContainer from "@/layout/PageContainer";
import VisualShowcase from "./VisualShowcase";

const FeaturedWorkSection = () => {
  return (
    <section className="relative overflow-x-hidden overflow-y-visible w-full py-20 lg:py-38">
      <PageContainer className="flex w-full items-center">
        <h2 className="max-w-lg text-6xl font-normal bg-text-gradient bg-clip-text text-transparent">
          We turn ideas into websites that push your business ahead.
        </h2>
      </PageContainer>

      {/* Right visual showcase */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center translate-x-1/4">
        <VisualShowcase />
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
