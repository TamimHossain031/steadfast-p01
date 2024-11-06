/* eslint-disable no-unused-vars */
import { useState } from "react";
import mainProduct from "./../../assets/hero/heroLeft.png";
import { initial } from "./../../Db/cart";
import AddQuantity from "./../AddQuantity";
import Total from "./../Checkout/Total";
export default function Cart() {
  const [cart, setCart] = useState(initial);
  const stock = 15;
  const updateProduct = (data) => {
    if (data.type == "quantity") {
      if (data.payload < 1) {
        return false;
      } else if (data.payload > stock) return false;
    }

    const filtered = cart.map((single) =>
      single.title == data.title
        ? { ...single, quantity: data.payload }
        : single
    );
  };
  return (
    <div className=" flex-1">
      <h3 className="text-[24px] font-medium text-neutral-50 mb-4">
        Customer Information
      </h3>
      <div className="border-t-[1px] border-b-[1px] border-lightGray pt-4">
        {cart.length &&
          cart.map((single, i) => (
            <div
              key={i}
              className=" w-full flex  justify-between gap-4  items-center pb-4"
            >
              <figure className="flex gap-5 items-center max-w-[356px] w-full">
                <img
                  src={mainProduct}
                  alt=" product"
                  className="w-[80px] h-[80px] rounded-[4px] object-cover"
                />
                <div>
                  <figcaption className="text-white font-medium">
                    Dark black - wallet
                  </figcaption>
                  <figcaption className="text-primary">Color : Blue</figcaption>
                </div>
              </figure>
              <div>
                <h3 className="text-white">৳1150</h3>
                <del className="text-primary">৳1150</del>
              </div>
              {/* add quantity of product */}
              <AddQuantity getData={single} setData={updateProduct} />
            </div>
          ))}
      </div>
      <Total />
    </div>
  );
}
