import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto p-4 text-slate-200 font-inter">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
