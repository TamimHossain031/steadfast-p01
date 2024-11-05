/* eslint-disable react/prop-types */
import {
  PiEyeLight,
  PiHeartStraightLight,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
export default function SingleProduct({ data }) {
  const { label, img, title, oldPrice, newPrice } = data;
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <Link to={`/singleProduct/${title}`}>
      <div
        className={`max-h-[548px] relative text-white text-center cursor-pointer group overflow-hidden`}
      >
        <span
          className={`absolute top-[14px] left-[14px]  z-10 uppercase rounded-[4px] ${
            label == "new" ? "bg-blue" : "bg-red"
          } ${
            path == "shop"
              ? "text-[14px] w-[44px] h-[24px] leading-6"
              : "w-[61px] h-[40px] text-[18px] leading-10"
          }`}
        >
          {label}
        </span>
        <div className="relative">
          <figure className="max-h-[472px] overflow-hidden">
            <img
              className="w-full group-hover:scale-[1.1] group-hover:rotate-[5deg] transition-transform duration-300"
              src={img}
              alt={img}
            />
          </figure>
          <figcaption className="p-title pt-4">{title}</figcaption>
        </div>

        <h2 className="text-[20px] font-medium leading-[140%] mt-1">
          {newPrice}${" "}
          <del className="ml-3 font-normal text-neutral-400 text-[18px]">
            {oldPrice}$
          </del>
        </h2>

        {/* hover icon */}
        <div
          className={`absolute grid gap-[6px] top-[97px] left-[14px] -translate-x-[70px] group-hover:translate-x-[0px] transition-transform duration-500 ${
            path !== "shop" && "hidden"
          }`}
        >
          <button className="cardBtn">
            <PiShoppingCartSimpleLight />
            <span id="tooltip-right">Add to Cart</span>
          </button>
          <button className="cardBtn">
            <PiHeartStraightLight />
            <span id="tooltip-right">Add to Wish</span>
          </button>
          <button className="cardBtn">
            <PiEyeLight />
            <span id="tooltip-right">View</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
