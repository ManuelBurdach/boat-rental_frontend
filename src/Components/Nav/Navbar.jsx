import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">Statistiken</NavLink>
      <NavLink to="/boote">Bootsübersicht</NavLink>
      <NavLink to="/reservierungen">Reservierungen</NavLink>
    </div>
  );
};

export default Navbar;
