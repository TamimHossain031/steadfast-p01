/* eslint-disable react/prop-types */
import Rating from "./SingleProductPage/Rating";
export default function SingleCustomer({ data }) {
  const { img, description, star, name, designation } = data;
  
  return (
    <div className="min-h-[276px] grid place-content-center place-items-center afterBorder">
      <figure className="w-[99px] h-[99px] rounded-full  mb-6">
        <img
          className="w-full h-full rounded-full object-cover object-top"
          src={img}
          alt={img}
        />
      </figure>
      <p className="text-[14px] max-w-[370px]">{description}</p>
      <Rating className={`mt-4`} star={star}/>
      <p className="font-semibold text-white mt-4">{name}</p>
      <p className="text-[12px] text-customerDesg">{designation}</p>
    </div>
  );
}
