import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function SubCategory(sub) {
  const [active, setActive] = useState(false);
  const [cat, setCat] = useState(null);

  let height = `h-[${sub.length * 40}px] `;
  const handleCat = (e) => {
    setCat(e);
  };

  const handleActive = () => {
    setActive((i) => !i);
  };

  return (
    <div
      className={`w-full group ${
        active && "is-sub"
      } text-white transition-all duration-300`}
    >
      <div
        className="flex font-medium text-[16px] justify-between items-center p-[14px] transition-all capitalize"
        onClick={handleActive}
      >
        <h3>{sub.name}</h3>
        <span className="group-[.is-sub]:rotate-[-90deg] transition-all text-4xl">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
      <div
        className={` overflow-hidden transition-all duration-1000 ${
          active ? height + "opacity-100" : "opacity-0 h-0"
        }`}
      >
        <div className="px-[29px] *:my-2 *:leading-[150%] *:cursor-pointer">
          {sub.subCat &&
            sub.subCat.map((single, i) => (
              <p
                key={i}
                className={`${
                  cat == i && cat !== null && "text-white"
                } hover:text-white capitalize`}
                onClick={() => handleCat(i)}
              >
                -{single.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
