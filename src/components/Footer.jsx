import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/header/logo.svg";
export default function Footer() {
  const page = useLocation().pathname.slice(1);

  return (
    <footer
      className={`${
        page == "checkout" ? "mt-[80px]" : "mt-[165px]"
      } container `}
    >
      <div className="border-t-[1px] border-darkGray pt-10 md:pl-[25px] md:pr-[25px] flex flex-col lg:flex-row lg:justify-between">
        <div className="*:text-cardTitle *:text-[9px] lg:*:text-[16px] flex flex-col items-center lg:items-start">
          <figure className="pb-[25px] ">
            <img className="logo" src={logo} alt="logo" />
          </figure>
          <div className='flex gap-6 lg:flex-col lg:gap-0 *:text-[10px] md:*:text-[16px]'>
            <p>
              House# 44 , Rd No. 2/A, Dhanmondi <br></br> Zigatola Bus Stand ,
              Dhaka, 1209
            </p>
            <div className='*:text-[10px] md:*:text-[16px]'>
              <p className="lg:pt-[10px]">E-mail: hatbazar@gmail.com</p>
              <p>Hotline: 01811-477058</p>
            </div>
          </div>
        </div>
        <div className="*:text-cardTitle mt-6 lg:mt-0">
          <h2 className="f-title lg:pb-6">Company</h2>
          <ul className="*:mb-3 flex justify-center lg:flex-col  gap-2 text-[9px] lg:text-[16px]">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Terms and Condition</Link>
            </li>
          </ul>
        </div>
        <div className="*:text-cardTitle">
          <h2 className="f-title lg:pb-6">Support</h2>
          <ul className="*:mb-3 flex justify-center gap-2 text-[9px] lg:text-[16px] lg:flex-col">
            <li>
              <Link>FAQ&apos;s</Link>
            </li>
            <li>
              <Link>Support center</Link>
            </li>
            <li>
              <Link>Security</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="*:text-cardTitle  lg:pl-[25px]">
          <h2 className="f-title lg:pb-6">Find Us</h2>
          <div className="footer-link">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-[14px] font-medium text-center mt-[50px]">
        &copy; 2020 - 2023 Hatbazar. All rights reserved
      </p>
    </footer>
  );
}
