import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";

import type { AppRoute } from "../types/AppRoute";

export const routes: AppRoute[] = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
    showInNav: true,
  },
  {
    path: "/projects",
    label: "Projects",
    element: <Projects />,
    showInNav: true,
  },
  {
    path: "/about",
    label: "About",
    element: <About />,
    showInNav: true,
  },
  {
    path: "/faq",
    label: "FAQ",
    element: <FAQ/>,
    showInNav: true,
  },
  {
    path: "/contact",
    label: "Contact",
    element: <Contact />,
    showInNav: true,
  },
];
