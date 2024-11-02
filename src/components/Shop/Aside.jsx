import Accordion from "./Accordion";

export default function Aside(){
    return (
        <aside className='w-[299px] h-[1081px] border border-neutral-700'>
            <Accordion/>
            <Accordion/>
        </aside>
    );
}