import { NavLink } from "react-router-dom";
import type { NavLinkItemProps } from "../../types/NavLinkItemProps";
import clsx from "clsx";

const NavLinkItem = ({ to, label }: NavLinkItemProps) => {
  return (
    <NavLink to={to} end={to === "/" } className={({ isActive }) =>  clsx(
        "text-base font-normal",
        isActive ? "text-text" : "text-text-muted"
    )}>
      {label}
    </NavLink>
  );
};

export default NavLinkItem;
