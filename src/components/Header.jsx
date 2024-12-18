import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import search from "../assets/header/Search.svg";
import cart from "../assets/header/cart.svg";
import logo from "/logo.svg";
import wishlist from "../assets/header/wish.svg";
import addHeaderBg from "./Helpers/addHeaderBg";
import Nav from "./Nav";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const page = useLocation().pathname.slice(1);
  const setHeaderBg = page == "checkout" || page == "login";

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleNav = () => setNavShow(!navShow);

  useEffect(() => {
    //add header Bg
    addHeaderBg();
  }, []);

  return (
    <header
      className={`z-[1000] max-w-[1440px] w-full h-[109px] fixed top-0 pb-5 ${
        setHeaderBg && "bg-bgHero"
      }`}
      id="header"
    >
      <div className="header-wrap container">
        {/* //logo */}
        <Link to="/">
          <img className='logo' src={logo} alt="logo" />
        </Link>

        {/* navigation */}
        <Nav showNav={navShow} handleNav={toggleNav} />

        {/* cart & search  */}
        <div className="max-w-[160px] w-full hidden  md:flex justify-between relative">
          <div className="pt-2">
            <button onClick={toggleSearch}>
              <img src={search} alt="search" />
            </button>
            <input
              className={`px-2 max-w-[200px] z-[100] outline-none bg-bgDark xl:bg-transparent border rounded border-accent1 h-[40px] absolute top-[100%] right-[80%] text-white  ${
                showSearch ? "visible " : " hidden"
              }`}
              type="text"
              placeholder="Search"
            />
          </div>
          <button>
            <Link>
              <img src={wishlist} alt="wishList" />
            </Link>
          </button>

          <button className="cart-btn">
            <Link>
              <img src={cart} alt="cart" />
            </Link>
          </button>
        </div>

        {/* mobile navigation */}
        <div className="md:hidden fixed top-6 right-6 z-10">
          <button
            onClick={toggleNav}
            className="text-white hover:text-accent1 text-3xl"
          >
            {navShow ? <RxCross1 /> : <CiMenuFries />}
          </button>
        </div>
      </div>
    </header>
  );
}
