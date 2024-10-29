import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navigation">
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  );
}
