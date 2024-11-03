/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
export default function Nav({showNav,handleNav}) {

    
  return (
    <nav className={`navigation transition-all *:text-white ${showNav ? 'left-[100%]' : 'left-[0px]' }`}>
      <NavLink onClick={handleNav} to="/shop">Shop</NavLink>
      <NavLink onClick={handleNav} to="/about">About</NavLink>
      <NavLink onClick={handleNav} to="/contact">Contact</NavLink>
      <NavLink onClick={handleNav} to="/blog">Blog</NavLink>
    </nav>
  );
}
