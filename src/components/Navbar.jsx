import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between">
      <NavLink to="/">
      <img src={logo} alt="logo" className="w-auto max-h-14 p-1 rounded-lg" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
          Projects
        </NavLink>
        <NavLink to="/mathy" className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
          Math
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;