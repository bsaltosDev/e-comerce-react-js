// Cree un componente llamado NavItem que acepta las propiedades to, children y activeStyle
import { NavLink } from "react-router-dom"

const NavItem = ({ to, children, activeStyle }) => {
    return (
      // Use la etiqueta NavLink y le pasé las propiedades to y className
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {children}
      </NavLink>
    );
  };

  export default NavItem;