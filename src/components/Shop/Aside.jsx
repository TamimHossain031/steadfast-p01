import Accordion from "./Accordion";
import ColorPicker from "./ColorPicker";
import PriceRange from "./PriceRange";

export default function Aside(){

    return (
        <aside className='w-[299px] h-[1081px] border border-neutral-700'>
            <Accordion/>          
            <PriceRange/> 
            <ColorPicker/>
        </aside>
    );
}