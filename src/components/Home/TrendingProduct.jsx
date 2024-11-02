import { Link } from "react-router-dom";
import trend from "../../assets/trend/trend.png";
import Button from "../Button";
export default function TrendingProduct() {
  return (
    <section className="bg-bgDark2 mb-[100px]">
      <div className="container">
        <div className="flex align-bottom gap-[30px]">
          <div className="mt-[66px] ml-[40px] mb-[86px]">
            <h3 className="title2">Trending Wallet Collection</h3>
            <h2 className="text-[64px] font-semibold font-fraunces leading-[125%] text-white mt-[35px] mb-[21px]">
              UPTO 50% OFF
            </h2>
            <p className="max-w-[575px]">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <Link>
              <Button className="btn-primary bg-accent1 text-white" />
            </Link>
          </div>
          <figure className="content-end">
            <img
              className="max-w-[122%]"
              src={trend}
              alt="upto 50% off trending"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
