import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Accordion() {
  const [active, setActive] = useState(0);

  const handleActive = () => {
    setActive((i) => !i);
  };

  return (
    <div className={`w-full group ${active && "is-active"} text-white transition-all duration-300`}>
      <div
        className="flex border-b-[1px] justify-between items-center p-[14px] transition-all"
        onClick={handleActive}
      >
        <h3>Category</h3>
        <span className="group-[.is-active]:rotate-[-90deg] transition-all">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
      <div
        className={`max-h-0 group-[.is-active]:max-h-[100%] border overflow-hidden transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          assumenda ducimus, accusantium veniam aperiam suscipit veritatis ab
          pariatur hic? Saepe ipsum consectetur ut molestiae quos dignissimos
          natus consequatur vel tempora?
        </p>
      </div>
    </div>
  );
}
