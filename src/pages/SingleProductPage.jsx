import { RiArrowDropRightLine } from "react-icons/ri";
import { NavLink, useParams } from "react-router-dom";
import DiscountedProduct from "../components/DiscountedProduct";
import ProductDescription from "../components/SingleProductPage/ProductDescription";
import ProductImage from "../components/SingleProductPage/ProductImage";
import { data } from "../Db/products";
import ProductInfo from "../components/SingleProductPage/ProductInfo";
export default function SingleProductPage() {
  const { id } = useParams();
  let [product] = data.filter((single) => single.title == id);
  const { images, ...description } = product;

  return (
    <section className="container pt-[124px]">
      <div className="sm:px-[39px]">

        {/* Page navigation */}
        <div className="flex mb-[21px]">
          <NavLink to="/" className="text-primary">
            Home
          </NavLink>
          <RiArrowDropRightLine className="text-primary text-[25px]" />
          <NavLink to="/shop" className="text-primary">
            Shop
          </NavLink>
          <RiArrowDropRightLine className="text-primary text-[25px]" />
          <span className="text-darkGray">{description.title}</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[63px]">
          {/* single product Images */}
          <ProductImage images={images} />

          {/* single product description */}
          <ProductDescription {...description} />
        </div>
      </div>
      {/* product description, details and review */}
      <ProductInfo/>

      {/* recently discount products */}
      <DiscountedProduct />
    </section>
  );
}
