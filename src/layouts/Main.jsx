import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
