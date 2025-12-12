import { NavLink } from "react-router-dom";
import clsx from "clsx";

type NavLinkItemProps = {
  to: string;
  label: string;
};

const NavLinkItem = ({ to, label }: NavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        clsx("text-base font-normal", isActive ? "text-text" : "text-text-muted")
      }
    >
      {label}
    </NavLink>
  );
};

export default NavLinkItem;
