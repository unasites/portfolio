import { routes } from "../../router/routes";
import NavLinkItem from "../ui/NavLinkItem";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {routes
        .filter((route) => route.showInNav)
        .map((route) => (
          <NavLinkItem key={route.path} to={route.path} label={route.label} />
        ))}
    </div>
  );
};

export default NavLinks;
