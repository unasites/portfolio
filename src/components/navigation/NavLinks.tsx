import { routes } from "../../router/routes";
import NavLinkItem from "../ui/NavLinkItem";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {routes
        .filter((route) => route.showInNav)
        .map((route) => (
          <NavLinkItem onClick={onClick} key={route.path} to={route.path} label={route.label} />
        ))}
    </div>
  );
};

export default NavLinks;
