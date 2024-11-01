import mainProduct from "../../assets/hero/heroLeft.png";
import sideProduct from "../../assets/hero/heroRight.png";
import scroll from "../../assets/hero/scrollDown.svg";
import vector1 from "../../assets/hero/vector1.svg";
import vector2 from "../../assets/hero/vector2.svg";
import Button from "../Button";
import {Link} from 'react-router-dom';
export default function Hero() {
  return (
    <section className="hero">
      <div className="container relative w-dvw min-h-[960px]">
        <figure className="absolute bottom-0">
          <img src={mainProduct} alt="" />
        </figure>
        <figure className="absolute right-0 bottom-0 pt-[20px] bg-bgSideProduct translate-x-[-20px]">
          <img className="z-2 translate-x-[20px]" src={sideProduct} alt="" />
        </figure>
        <figure className="absolute bottom-[202px] right-[450px]">
          <img src={vector1} alt="" />
        </figure>
        <figure className="absolute bottom-[480px] right-0">
          <img src={vector2} alt="" />
        </figure>
        <div className="absolute left-1/2 bottom-[32px] uppercase text-white text-center">
          <p>scroll down</p>
          <button className="mt-[20px]">
            <img src={scroll} alt="" />
          </button>
        </div>
        {/* content */}
        <div className="absolute top-[9%] left-[35%] text-white">
          <h1 className="hero-title">Fold Wallet</h1>
          <div className="ml-[25%]">
            <p className="hero-content">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.taciti
              sociosqu ad litora torquent per.
            </p>
            <Link>
              <Button className="btn-primary bg-accent1"></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
