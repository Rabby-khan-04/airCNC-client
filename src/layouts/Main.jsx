import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
