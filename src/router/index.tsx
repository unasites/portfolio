import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { routes } from "./routes";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);
