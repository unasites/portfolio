import FeaturedWorkSection from "./sections/FeaturedWork/FeaturedWorkSection";
import HeroSection from "./sections/HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturedWorkSection/>
    </div>
  );
};

export default Home;
