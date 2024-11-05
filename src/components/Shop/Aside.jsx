import Accordion from "./Accordion";
import ColorPicker from "./ColorPicker";
import PriceRange from "./PriceRange";
import {useState} from 'react';
import { BsBoxArrowRight } from "react-icons/bs";

export default function Aside(){
    const [active,setActive] = useState(false)

    return (
        <aside className={`w-[299px] h-fit border border-neutral-700 fixed   lg:unset z-[500] bg-bgDark transition-all ${active ? 'left-0' : 'left-[-300px]' }`}>
            <button className={`w-10 h-10 rounded-full absolute top-[15%] -right-10 border border-darkGray text-red text-[20px] pl-3  ${active ? 'rotate-2' : 'rotate-0' }`} onClick={()=>setActive(!active)}><BsBoxArrowRight /></button>
            <Accordion/>          
            <PriceRange/> 
            <ColorPicker/>
        </aside>
    );
}