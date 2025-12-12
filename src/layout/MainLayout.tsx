import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import PageContainer from "./PageContainer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </main>
    </>
  );
};

export default MainLayout;
