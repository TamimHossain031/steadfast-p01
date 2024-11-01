/* eslint-disable react/prop-types */
import {Link,useLocation} from 'react-router-dom';
import { PiShoppingCartSimpleLight,PiHeartStraightLight,PiEyeLight } from "react-icons/pi";
export default function SingleProduct({ data }) {
  const { label, img, title, oldPrice, newPrice } = data;
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <Link>
     <div className={`max-h-[548px] relative text-white text-center cursor-pointer ${path == 'shop' && ''}` }>
      <span
        className={`absolute top-[14px] left-[14px]   uppercase rounded-[4px] ${
          label == "new" ? "bg-blue" : "bg-red"
        } ${path == 'shop' ? 'text-[14px] w-[44px] h-[24px] leading-6' : 'w-[61px] h-[40px] text-[18px] leading-10'}`}
      >
        {label}
      </span>
      <figure className="">
        <img className='max-h-[472px]' src={img} alt={img} />
        <figcaption className="p-title pt-4">{title}</figcaption>
      </figure>
      
      <h2 className="text-[20px] font-medium leading-[140%] mt-1">
        {newPrice}${" "}
        <del className="ml-3 font-normal text-cardTitle text-[18px]">
          {oldPrice}$
        </del>
      </h2>

      {/* hover icon */}
      <div className='absolute grid gap-[6px] top-[97px] left-[14px]'>
        <button className='cardBtn'>
          <PiShoppingCartSimpleLight/>
        </button>
        <button  className='cardBtn'>
          <PiHeartStraightLight/>
        </button>
        <button  className='cardBtn'>
          <PiEyeLight/>
        </button>
      </div>
    </div>
    </Link>
   
  );
}
