import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { data } from "../../Db/products";
import SingleProduct from "../SingleProduct";
import PaginatedItems from "./Pagination";
export default function AllProducts() {
  const doubleData = data.flatMap((i) => [i, i]);
  const items = [...Array(33).keys()];

  return (
    <div className="flex-1 mb-[15px]">
      <div className="flex mb-[21px]">
        <Link to="/" className="text-primary">
          Home
        </Link>
        <RiArrowDropRightLine className="text-primary text-[25px]" />
        <p className="text-white">Shop</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
        {doubleData.length &&
          doubleData.map((single, index) => (
            <SingleProduct key={index} data={single} />
          ))}
      </div>
      <div className='flex justify-end mt-[62px]'>
        <PaginatedItems items={items} />
      </div>
    </div>
  );
}
