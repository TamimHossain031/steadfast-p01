import logo from '../assets/header/logo.svg';
import { FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="mt-[165px] container ">
      <div className="border-t-[1px] border-darkGray pt-10 pl-[25px] pr-[25px] flex justify-between">
        <div className='*:text-cardTitle '>
            <figure className='pb-[25px]'>
                <img src={logo} alt="logo" />
            </figure>
            <p>House# 44 , Rd No. 2/A, Dhanmondi <br></br> Zigatola Bus Stand , Dhaka, 1209</p>
            <p className='pt-[10px]'>E-mail: hatbazar@gmail.com</p>
            <p>Hotline: 01811-477058</p>
        </div>
        <div className='*:text-cardTitle'>
            <h2 className='f-title pb-6'>Company</h2>
            <ul className='*:mb-3'>
                <li><Link>About Us</Link></li>
                <li><Link>Contact Us</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Terms and Condition</Link></li>
            </ul>

        </div>
        <div className='*:text-cardTitle'>
            <h2 className='f-title pb-6'>Support</h2>
            <ul className='*:mb-3'>
                <li><Link>FAQ&apos;s</Link></li>
                <li><Link>Support center</Link></li>
                <li><Link>Security</Link></li>
                <li><Link>Blog</Link></li>
            </ul>

        </div>
        <div className='*:text-cardTitle  pl-[25px]'>
            <h2 className='f-title pb-6'>Find Us</h2>
            <div className='footer-link'>
                <Link><FaFacebookF /></Link>
                <Link><FaLinkedinIn /></Link>
                <Link><FaInstagram /></Link>
                <Link><FaTwitter /></Link>
            </div>
        </div>
      </div>
      <p className='text-[14px] font-medium text-center mt-[50px]'>&copy; 2020 - 2023 Hatbazar. All rights reserved</p>
    </footer>
  );
}
