import support from "../../assets/services/headphones.svg";
import sequre from "../../assets/services/lock.svg";
import savings from "../../assets/services/save-money.svg";
import shipping from "../../assets/services/shipped (1).svg";
export default function Service() {
  return (
    <section className="grid grid-cols-4 container mt-[85px] mb-[98px]" id='service'>
      <div className="service-card pl-0">
        <span>
          <img src={shipping} alt="" />
        </span>
        <div>
          <h3 className="service-title">free shipping</h3>
          <p>Free Shipping over $100</p>
        </div>
      </div>
      <div className="service-card">
        <span>
          <img src={sequre} alt="" />
        </span>
        <div>
          <h3 className="service-title">Secure Payment</h3>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className="service-card">
        <span>
          <img src={savings} alt="" />
        </span>
        <div>
          <h3 className="service-title">Easy Return</h3>
          <p>Money Back Guaranty</p>
        </div>
      </div>
      <div className="service-card border-none ">
        <span>
          <img src={support} alt="" />
        </span>
        <div>
          <h3 className="service-title">27/7 Support</h3>
          <p>Support 24 hours a day</p>
        </div>
      </div>
    </section>
  );
}
