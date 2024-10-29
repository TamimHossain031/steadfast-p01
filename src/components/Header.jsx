import {Link,NavLink} from 'react-router-dom';
import logo from '../assets/header/logo.svg';
import wishlist from '../assets/header/wish.svg';
import search from '../assets/header/Search.svg';
import cart from '../assets/header/cart.svg';
export default function Header(){
    return (
            <header className='flex justify-between min-h-[48px] items-center'>	
                <Link to='/'>
                <img src={logo} alt="logo" />
                </Link>
                <nav className='navigation'>
                    <NavLink  to='/shop'>Shop</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
                <div className='w-[160px] flex justify-between'>
                    <button>
                        <img src={search} alt="search" />
                    </button>
                    <Link>
                        <img src={wishlist} alt="wishList" />
                    </Link>
                    <Link>
                        <img src={cart} alt="cart" />
                    </Link>
                </div>
            </header>
    );
}