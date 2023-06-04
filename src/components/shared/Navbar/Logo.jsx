import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="w-[102px] hidden md:block" />
    </Link>
  );
};

export default Logo;
