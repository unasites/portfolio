import BrandValueSection from "./sections/BrandValueSection/BrandValueSection";
import CarouselSection from "./sections/CarouselSection/CarouselSection";
import FeaturedWorkSection from "./sections/FeaturedWork/FeaturedWorkSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import IdentitySection from "./sections/IdentitySection/IdentitySection";
import MeetOurTeam from "./sections/MeetOurTeam/MeetOurTeam";

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      <HeroSection />
      <FeaturedWorkSection />
      <MeetOurTeam/>
      <CarouselSection/>
      <IdentitySection/>
      <BrandValueSection/>
    </div>
  );
};

export default Home;
