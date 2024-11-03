import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SingleColor from "./SingleColor";
import {color} from '../../Db/productColor';
export default function ColorPicker() {
  const [active, setActive] = useState(0);
  const [markColor,setMarkColor] = useState(['#22C55E']);


  const handleColor=(e)=>{
    if(markColor.includes(e)){
        setMarkColor([...markColor.filter(i=> i !== e)]);
    }else{
       setMarkColor([
        ...markColor,
        e
       ])
    }
  }
 

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
        className="flex border-y-[1px] font-medium text-[18px]  border-neutral-700 justify-between items-center p-[14px] transition-all capitalize"
        onClick={handleActive}
      >
        <h3>color</h3>
        <span className="group-[.is-active]:rotate-[-90deg] transition-all text-4xl">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
      <div
        className={`max-h-0 group-[.is-active]:max-h-[100%] group-[.is-active]:px-[15px] group-[.is-active]:py-[24px]  overflow-hidden transition-all duration-300 grid grid-cols-4 justify-items-center gap-y-5 *:grid *:justify-items-center ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {color.length && color.map((single,i)=>(
            <SingleColor key={i} color={single} check={markColor.includes(single.hexCode)} handleColor={handleColor}/>
        ))}
       
      </div>
    </div>
  );
}
