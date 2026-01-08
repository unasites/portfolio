import { NavLink } from "react-router-dom";
import clsx from "clsx";

type NavLinkItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

const NavLinkItem = ({ to, label, onClick }: NavLinkItemProps) => {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        clsx(
          "text-base font-normal hover:text-text transition-all duration-300",
          isActive ? "text-text" : "text-text-muted"
        )
      }
    >
      {label}
    </NavLink>
  );
};

export default NavLinkItem;
