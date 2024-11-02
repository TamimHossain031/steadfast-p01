import Colors from "./Color";
import Rating from "./Rating";
import {useState} from 'react';
export default function ProductDescription(description) {
  const { title, stock, star, review, sold, oldPrice, newPrice,colors } = description;

  const [productData,setProductData]= useState({
    title,
    color:colors[0].hexCode,
    quantity:0
  })

  const updateProduct = (data)=>{
    setProductData({
        ...productData,
        [data.type] : data.payload
    })

    
  }

  
  console.log(productData);
  
  return (
    <div className="flex-1">
      <h2 className="font-medium text-[24px] leading-[133%] text-white my-[10px]">
        {title}
      </h2>
      <span
        className={`${
          stock ? "bg-green" : "bg-red"
        } text-[14px] font-medium leading-[143%] rounded-[4px] py-[2px] px-[6px] text-white`}
      >
        {stock ? "Instock" : "Out of stock"}
      </span>
      {/* rating */}
      <div className="flex gap-x-[10px] mt-4  *:text-neutral-400 divide-x-[1px] divide-neutral-400 ">
        <span className="flex gap-[10px] leading-[100%]">
          <Rating className={`flex`} star={star} />
          {star}
        </span>
        <span className="pl-[10px] leading-[100%]">{review} Review</span>
        <span className="pl-[10px] leading-[100%]">{sold} Sold</span>
      </div>

      {/* pricing */}
      <div className="flex gap-[15px] items-center my-[57px]">
        <span className="font-medium text-[32px] leading-[125%] text-white pr-1">
          {newPrice}$
        </span>
        <del className="font-medium text-[18px] leading-[156%] text-fBtnBorder">
          {oldPrice}$
        </del>
        <span className="font-medium text-[18px] leading-[156%] text-green">
          {oldPrice - newPrice}%off
        </span>        
      </div>

      {/* color */}
      <Colors color={colors} setColor={productData.color} setData={updateProduct}/>
    </div>
  );
}