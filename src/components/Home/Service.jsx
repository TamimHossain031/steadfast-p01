/* eslint-disable react/display-name */
import support from "../../assets/services/headphones.svg";
import sequre from "../../assets/services/lock.svg";
import savings from "../../assets/services/save-money.svg";
import shipping from "../../assets/services/shipped (1).svg";
import { forwardRef } from 'react';
const Service = forwardRef((props,ref) =>{
  return (
    //service section //
    <section ref={ref} className="container py-10 xl:pt-[85px] xl:pb-[98px] grid  gap-y-6 sm:grid-cols-2 lg:grid-cols-4 sm:*:border-r-[1.5px]  *:border-darkGray  *:flex   sm:*:justify-center  ">
      <div className=''>
        <div className="service-card">
          <figure>
            <img src={shipping} alt="" />
          </figure>
          <div>
            <h3 className="service-title">free shipping</h3>
            <p>Free Shipping over $100</p>
          </div>
        </div>
      </div>
      <div className='border-none lg:border-solid'>
        <div className="service-card">
          <figure>
            <img src={sequre} alt="" />
          </figure>
          <div>
            <h3 className="service-title">Secure Payment</h3>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>
      <div>
        <div className="service-card">
          <figure>
            <img src={savings} alt="" />
          </figure>
          <div>
            <h3 className="service-title">Easy Return</h3>
            <p>Money Back Guaranty</p>
          </div>
        </div>
      </div>

      <div className='border-none'>
        <div className="service-card border-none ">
          <figure>
            <img src={support} alt="" />
          </figure>
          <div>
            <h3 className="service-title">27/7 Support</h3>
            <p>Support 24 hours a day</p>
          </div>
        </div>
      </div>
    </section>
  );
})

export default Service;