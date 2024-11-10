
import { Link } from "react-router-dom";
import NavRoutes from "./nav-routes";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between general-padding">
      <Link to={"/"}>logo</Link>

      <NavRoutes />
    </header>
  );
};

export default Navbar;
