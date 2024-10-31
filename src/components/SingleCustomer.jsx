/* eslint-disable react/prop-types */
import { GiRoundStar } from "react-icons/gi";
export default function SingleCustomer({data}){
    const {img,description,star,name,designation} = data;
    const starCount = Array(star).fill('s');
    console.log(starCount)
    return (
        <div className="h-[276px] grid place-content-center place-items-center afterBorder">
            <img className='w-[99px] h-[99px] rounded-full mb-6' src={img} alt={img} />
            <p className='text-[14px] max-w-[370px]'>{description}</p>
            <div className='flex text-starColor mt-4 '>
                {starCount.length && starCount.map((single,index)=>(
                    <GiRoundStar key={index}/>
                ))}
            </div>
            <p className='font-semibold text-white mt-4'>{name}</p>
            <p className='text-[12px] text-customerDesg'>{designation}</p>

        </div>
    );
}