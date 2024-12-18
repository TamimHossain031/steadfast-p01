import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SubCategory from "./SubCategory";
import { subCategory } from "../../Db/subCategory";
export default function Accordion() {
  const [active, setActive] = useState(1);
  

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
        className="flex border-b-[1px] font-medium text-[18px]  border-neutral-700 justify-between items-center p-[14px] transition-all"
        onClick={handleActive}
      >
        <h3>Category</h3>
        <span className="group-[.is-active]:rotate-[-90deg] transition-all text-4xl">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
      <div
        className={`max-h-0 group-[.is-active]:max-h-[100%] group-[.is-active]:py-6  overflow-hidden transition-all duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {subCategory.length && subCategory.map((sub, i) => <SubCategory key={i} {...sub} />)}
      </div>
    </div>
  );
}
