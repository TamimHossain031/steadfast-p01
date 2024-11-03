import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
export default function PriceRange() {
  const MIN = 0;
  const MAX = 100;
  const [active, setActive] = useState(0);
  const [value, setValue] = useState([MIN, MAX]);

  const handleActive = () => {
    setActive((i) => !i);
  };

  return (
    <div
      className={`w-full group ${
        active && "is-active"
      } text-white transition-all duration-300`}
    >
      <div
        className="flex border-y-[1px] font-medium text-[18px]  border-neutral-700 justify-between items-center p-[14px] transition-all"
        onClick={handleActive}
      >
        <h3>Price</h3>
        <span className="group-[.is-active]:rotate-[-90deg] transition-all text-4xl">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
      <div
        className={`max-h-0 group-[.is-active]:max-h-[100%] group-[.is-active]:px-[10px] group-[.is-active]:pt-[24px] group-[.is-active]:pb-[48px]  overflow-hidden transition-all duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <RangeSlider
          id="range-slider-yellow"
          value={value}
          onInput={setValue}
        />
        <div className="price-btnGroup">
          <button>${value[0]}</button>
          <button>${value[1]}</button>
        </div>
      </div>
    </div>
  );
}
