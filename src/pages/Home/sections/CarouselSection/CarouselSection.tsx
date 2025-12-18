import PageContainer from "@/layout/PageContainer";
import Carousel from "./Carousel";
import ButtonsContainer from "@/components/ui/Button/ButtonsContainer";
import Button from "@/components/ui/Button/Button";

const CarouselSection = () => {
  return (
    <section className="flex justify-between flex-col gap-6 text-center py-20 xl:flex-row items-center min-h-screen">
      <div className="px-6">
        <Carousel />
      </div>
      <PageContainer className="flex xl:justify-end flex-col  gap-10">
        <h2 className="max-w-lg text-5xl xl:text-6xl font-normal bg-text-gradient bg-clip-text text-transparent">
          Discover the work behind our vision
        </h2>
        <ButtonsContainer className="xl:flex-row-reverse flex-col-reverse justify-center xl:justify-start">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="secondary">
            Contact us
          </Button>
        </ButtonsContainer>
      </PageContainer>
    </section>
  );
};

export default CarouselSection;
