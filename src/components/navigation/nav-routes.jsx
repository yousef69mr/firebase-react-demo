import React from "react";
import { Link } from "react-router-dom";

const NavRoutes = () => {
  return (
    <nav className="flex items-center gap-3 md:gap-8">
      <Link to={"/groups"}>Groups</Link>
      <Link to={"/add-group"}>Add Group</Link>
    </nav>
  );
};

export default NavRoutes;
