/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import mainProduct from "../../assets/hero/heroLeft.png";
import sideProduct from "../../assets/hero/heroRight.png";
import scroll from "../../assets/hero/scrollDown.svg";
import vector1 from "../../assets/hero/vector1.svg";
import vector2 from "../../assets/hero/vector2.svg";
import Button from "../Button";
export default function Hero({ scrollToNextSection }) {
  return (
    // hero section //
    <section className="hero">
      <div className="container relative w-dvw min-h-[500px] md:min-h-[800px] lg:min-h-[960px]">
        <figure className="absolute bottom-[44%] sm:bottom-0 w-[120px] sm:w-[250px] lg:w-fit">
          <img className="" src={mainProduct} alt="" />
        </figure>
        <figure className="absolute w-[100px] xl:w-fit  right-0 bottom-0 pt-[10px] xl:pt-5 bg-bgSideProduct translate-x-[-40px]">
          <img className="z-2  translate-x-[10px] xl:translate-x-[20px]" src={sideProduct} alt="" />
        </figure>
        <figure className="absolute bottom-[30%] lg:bottom-[202px] right-[10%] lg:right-[450px] scale-50 xl:scale-100">
          <img src={vector1} alt="" />
        </figure>
        <figure className="absolute bottom-[70%] lg:bottom-[480px] right-0 scale-50 xl:scale-100">
          <img src={vector2} alt="" />
        </figure>
        <div className="absolute left-1/4 sm:left-1/2 bottom-[2%] md:bottom-[32px] uppercase text-white text-center">
          <p>scroll down</p>
          <button
            className="mt-[20px] animate-bounce"
            onClick={scrollToNextSection}
          >
            <img src={scroll} alt="" />
          </button>
        </div>

        {/* content */}
        <div className="absolute top-[20%] sm:top-[30%] sm:left-[25%] md:top-[15%] md:left-[25%] lg:left-[30%] lg:top-[100px] text-white">
          <h1 className="hero-title">Fold Wallet</h1>
          <div className="ml-[130px] md:ml-[30%] lg:ml-[45%] xl:ml-[33%]">
            <p className="hero-content">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.taciti
              sociosqu ad litora torquent per.
            </p>
            <Link to="/shop">
              <Button className="btn-primary bg-accent1"></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
