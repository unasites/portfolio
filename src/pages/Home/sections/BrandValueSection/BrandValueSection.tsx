import Button from "@/components/ui/Button/Button";
import ButtonsContainer from "@/components/ui/Button/ButtonsContainer";

const BrandValueSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen gap-10 py-20 px-6">
      <h1 className=" max-w-7xl text-5xl leading-[1.2] xl:text-6xl font-normal text-center bg-text-gradient bg-clip-text text-transparent">
        Your business deserves more than a template. Let’s create a powerful website together.
      </h1>
      <ButtonsContainer className="">
        <Button size="lg">Get started</Button>
        <Button size="lg" variant="secondary">
          Contact us
        </Button>
      </ButtonsContainer>
    </section>
  );
};

export default BrandValueSection;
