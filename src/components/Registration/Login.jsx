/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Field from "../Checkout/Field";
export default function Login({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const setData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(setData)}>
        {/* phone number field */}
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

        {/* password field */}
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

        {/* submit */}
        <input
          className="w-full h-[64px] bg-accent1 rounded px-5 py-[18px] text-white mt-[35px] cursor-pointer"
          type="submit"
          value="Login"
        />
      </form>

      {/* forgate password */}
      <div className='text-center'>
        <Link className="text-red text-center mt-[26px]">Forgot password?</Link>
      </div>
      <hr className="text-darkGray mt-[22px] mb-[15px]" />
      <p className="text-neutral-200 pb-6 text-center">
        New customer?
        <button
          className="text-accent1 hover:underline mx-1"
          onClick={() => onLogin(false)}
        >
          register
        </button>
        here
      </p>
    </div>
  );
}
