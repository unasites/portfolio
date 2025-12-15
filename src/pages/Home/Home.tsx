import FeaturedWorkSection from "./sections/FeaturedWork/FeaturedWorkSection";
import HeroSection from "./sections/HeroSection";
import MeetOurTeam from "./sections/MeetOurTeam/MeetOurTeam";

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      <HeroSection />
      <FeaturedWorkSection />
      <MeetOurTeam/>
    </div>
  );
};

export default Home;
