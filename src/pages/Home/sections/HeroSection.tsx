import Button from "../../../components/ui/Button/Button";
import PageContainer from "../../../layout/PageContainer";

const HeroSection = () => {
  return (
    <section className="flex flex-1 items-center justify-center w-full">
      <PageContainer className="inline-flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-normal">Let's build.</h1>
          <h1 className="text-8xl font-bold bg-primary-gradient bg-clip-text text-transparent leading-tight">
            Extraordinary.
          </h1>
        </div>

        <p className="text-text-muted text-base text-center max-w-130">
          UNA is a site that helps you create powerful websites designed to work for you and drive
          your growth.
        </p>

        <div className="flex items-center">
          {" "}
          <Button>Get started</Button>
          <Button variant="secondary">
            Contact us{" "}
            
          </Button>
        </div>
      </PageContainer>
    </section>
  );
};

export default HeroSection;
