import { RiArrowDropRightLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import DiscountedProduct from "../components/DiscountedProduct";
import { data } from "../Db/products";
import ProductImage from "../components/SingleProductPage/ProductImage";
import ProductDescription from "../components/SingleProductPage/ProductDescription";
export default function SingleProductPage() {
  const { id } = useParams();
  let [product] = data.filter((single) => single.title == id);
  const {images,...description} = product;  
  

  return (
    <section className="container pt-[124px]">
      <div className="px-[39px]">
        <div className="flex mb-[21px]">
          <Link to="/" className="text-primary">
            Home
          </Link>
          <RiArrowDropRightLine className="text-primary text-[25px]" />
          <Link to="/shop" className="text-primary">
            Shop
          </Link>
          <RiArrowDropRightLine className="text-primary text-[25px]" />
          <span className="text-darkGray">{description.title}</span>
        </div>
        <div className='flex gap-[63px]'>
          <ProductImage images={images}/>
          <ProductDescription {...description} />
        </div>
      </div>
      <DiscountedProduct />
    </section>
  );
}
