import Logo from "../icons/Logo";
import NavLinks from "../navigation/NavLinks";

const Navbar = () => {
  return (
    <nav className="w-full relative z-20">
      <div className="px-3 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
