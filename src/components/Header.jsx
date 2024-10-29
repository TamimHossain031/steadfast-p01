import {useState} from 'react';
import { Link } from "react-router-dom";
import search from "../assets/header/Search.svg";
import cart from "../assets/header/cart.svg";
import logo from "../assets/header/logo.svg";
import wishlist from "../assets/header/wish.svg";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Nav from './Nav';
export default function Header() {
    const[showSearch,setShowSearch] = useState(false);

    const toggleSearch=()=> setShowSearch(!showSearch) ;
  return (
    <header className="header-wrap">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Nav/>
      <div className="w-[160px] hidden  md:flex justify-between relative">
        <div className='pt-2'>
          <button onClick={toggleSearch}><img src={search} alt="search" /></button>
          <input className={`transition-all absolute top-[30%] right-[100%] bg- ${showSearch ? 'visible' : 'hidden'}`} type='text'/>
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

      <div className='md:hidden'>
        <span className='text-white hover:text-accent1'><CiMenuFries /></span> 
        <span className='text-white hover:text-accent1'><RxCross1 /></span> 
      
      </div>
    </header>
  );
}
