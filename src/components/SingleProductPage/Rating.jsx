/* eslint-disable react/prop-types */
import { GiRoundStar } from "react-icons/gi";
export default function Rating({star,className}){

    const ratingStar = Array.from({ length: 5 }, (v, i) =>(
        <span key={i}>
            {
                star >= i + 1 ? (<GiRoundStar className='text-starColor' key={i} />) : (<GiRoundStar className='text-gray' key={i} />)
           }
        </span>
        
    ));
    
    return (
            <div className={`flex gap-[5px] ${className}`}>	
            {ratingStar}
            </div>
    );
}