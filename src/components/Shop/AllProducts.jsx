import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {data} from '../../Db/products';
import SingleProduct from "../SingleProduct";
export default function AllProducts() {
    const doubleData = data.flatMap(i => [i,i]); 
    
    
  return (
    <div className="flex-1 h-[2081px]">
      <div className="flex mb-[21px]">
        <Link to="/" className="text-primary">
          Home
        </Link>
        <RiArrowDropRightLine className="text-primary text-[25px]" />
        <Link>Shop</Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8'>
        {doubleData.length && doubleData.map((single,index)=>(
            <SingleProduct key={index} data={single}/>
        ))}
      </div>
    </div>
  );
}
