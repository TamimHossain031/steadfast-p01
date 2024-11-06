
import CustomerInfo from "../components/Checkout/CustomerInfo";
import Cart from "../components/Checkout/Cart";

export default function Checkout() { 
 

  return (
    <section className="pt-[124px] container">
      <h2 className="font-medium text-[28px] capitalize text-center text-neutral-100">
        checkout
      </h2>
      <p className="font-normal text-neutral-100 text-[12px] sm:text-[18px] leading-[156%] sm:mt-[18px] text-center ">
        Please fill up below information to confirm your order
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-x-[109px] gap-y-10 mt-12 min-h-5">
        {/* show cart products */}
        <Cart/>
        {/* add product Information */}
        <CustomerInfo />
      </div>
    </section>
  );
}
