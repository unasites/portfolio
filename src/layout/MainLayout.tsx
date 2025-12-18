import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex flex-1">
          <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
