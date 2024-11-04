import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Field from "../components/Checkout/Field";

import SocialLogin from "../components/Registration/SocialLogin";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const setData = (data) => {
    console.log(data);
  };
  return (
    <section className="pt-[124px] container  flex justify-center">
      <div className="max-w-[483px] min-h-[607px] w-full mt-12">
        <div className="text-center flex justify-center gap-5 *:w-[140px] *:h-[31px] *:hover:text-accent1 *:hover:border-accent1  uppercase text-cardTitle font-medium text-[20px] leading-[140%] mb-10 *:transition-all *:duration-100">
          <button className="text-accent1 border-b-[1.5px] border-accent1">
            Login
          </button>
          <button className="border-b-[1.5px] border-cardTitle">
            Register
          </button>
        </div>
        <div>
        <div>
            <form onSubmit={handleSubmit(setData)}>
              <Field error={errors.phone}>
                <input
                  {...register("phone", {
                    required: "Please enter your phone",
                  })}
                  className="w-full h-[64px] bg-transparent border-[1.5px] border-cardTitle rounded px-5 py-[18px] text-white placeholder:text-primary my-1"
                  type="phone"
                  placeholder="Phone"
                />
              </Field>
              <Field error={errors.password}>
                <input
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                  className="w-full h-[64px] bg-transparent border-[1.5px] border-cardTitle rounded px-5 py-[18px] text-white placeholder:text-primary my-1"
                  type="password"
                  placeholder="Password"
                />
              </Field>

              <input
                className="w-full h-[64px] bg-accent1 rounded px-5 py-[18px] text-white mt-[35px] cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
            <Link className="text-red text-center mt-[26px]">
              Forgot password?
            </Link>
            <hr className="text-darkGray mt-[22px] mb-[15px]" />
            <p className="text-neutral-200 pb-6">
              New customer?{" "}
              <Link className="text-accent1 hover:underline" to="/signup">
                register
              </Link>{" "}
              here
            </p>
          </div> 
          <SocialLogin />
        </div>
      </div>
    </section>
  );
}
