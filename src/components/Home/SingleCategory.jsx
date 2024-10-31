/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import Button from '../Button';
export default function SingleCategory({data}){
    const {categroy,quantity,img} = data;
    const myStyle = {
        background: `linear-gradient(180deg, rgba(125, 125, 125, 0) 0%, rgba(0, 0, 0, 0.7) 100%), 
                     url(${img})`,
        backgroundSize: 'cover', // makes the image cover the entire container
        backgroundPosition: 'center', // centers the image
        
      };
    return (
        <div className="h-[460px] relative cursor-pointer group flex flex-col justify-end overflow-hidden pb-[20px]" style={myStyle} >
           
           <div className='text-center translate-y-[60px] group-hover:translate-y-[0px] transition duration-500'>
            <h3 className='service-title font-semibold'>{categroy}</h3>
            <p className='text-cardTitle'>{quantity} product</p>
            <Link>
            <Button className='btn-primary hover:delay-75 mt-[14px]'></Button>
            </Link>
           </div>

        </div>
    );
}