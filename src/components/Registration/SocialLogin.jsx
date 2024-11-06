import { Link } from "react-router-dom";
import facebook from "../../assets/customer/facebook.svg";
import google from "../../assets/customer/google.svg";
export default function SocialLogin() {
  return (
    <div className="w-full mt-6 flex gap-[25px] *:w-full *:h-[56px] *:bg-neutral-200 *:rounded *:font-medium">
      {/* login by facebook */}
      <Link>
        <figure className="h-full flex gap-2 justify-center items-center">
          <img src={facebook} alt="facebook" />
          <figcaption className='text-[#0571ED]'>Facebook</figcaption>
        </figure>
      </Link>

      {/* login by google */}
      <Link>
        <figure className="h-full flex gap-2 justify-center items-center">
          <img src={google} alt="google" />
          <figcaption>Google</figcaption>
        </figure>
      </Link>
    </div>
  );
}
