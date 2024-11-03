/* eslint-disable no-unused-vars */
import { useState } from "react";
import mainProduct from "../assets/hero/heroLeft.png";
import AddQuantity from "../components/AddQuantity";
import CustomerInfo from "../components/Checkout/CustomerInfo";
import Total from "../components/Checkout/Total";
export default function Checkout() {
  const initial = [
    {
      title: "hello world",
      color: "blue",
      quantity: 4,
    },
    {
      title: "hello tamim",
      color: "blue",
      quantity: 10,
    },
  ];
  const [cart, setCart] = useState(initial);

  const stock = 15;
  const updateProduct = (data) => {
    if (data.type == "quantity") {
      if (data.payload < 1) {
        return false;
      } else if (data.payload > stock) return false;
    }

    const filtered = cart.filter((single) => single.title == data.title);
  };

  return (
    <section className="pt-[124px] container">
      <h2 className="font-medium text-[28px] capitalize text-center text-neutral-100">
        checkout
      </h2>
      <p className="font-normal text-neutral-100 text-[18px] leading-[156%] mt-[18px] text-center">
        Please fill up below information to confirm your order
      </p>
      <div className="flex gap-x-[109px] mt-12 min-h-5">
        <div className=" flex-1">
          <h3 className="text-[24px] font-medium text-neutral-50 mb-4">
            Customer Information
          </h3>
          <div className="border-t-[1px] border-b-[1px] border-lightGray pt-4">
            {cart.length &&
              cart.map((single, i) => (
                <div
                  key={i}
                  className=" w-full flex justify-between items-center pb-4"
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
                      <figcaption className="text-primary">
                        Color : Blue
                      </figcaption>
                    </div>
                  </figure>
                  <div>
                    <h3 className="text-white">৳1150</h3>
                    <del className="text-primary">৳1150</del>
                  </div>
                  <AddQuantity getData={single} setData={updateProduct} />
                </div>
              ))}              
          </div>
          <Total/>
        </div>
       <CustomerInfo/>
      </div>
    </section>
  );
}
