import { useState } from "react";
import Logo from "@/components/icons/Logo";
import NavLinks from "@/components/navigation/NavLinks";
import BurgerButton from "../MobileMenu/BurgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full relative z-50">
      <div className="p-8 flex items-center justify-between">
        <Logo size={60} />
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="lg:hidden">
          <BurgerButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
