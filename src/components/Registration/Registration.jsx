import { useForm } from "react-hook-form";
import Field from "../Checkout/Field";
import { RxCross1 } from "react-icons/rx";
export default function Registration() {
    let doCross = document.querySelector('#cross');
    const doCrossFunc = (e)=>{
        e.preventDefault();
        doCross.value = '';
        doCross.focus()
    }
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
        <Field error={errors.name}>
          <input
            {...register("name", {
              required: "Please enter your name",
            })}
            className="w-full h-[64px] bg-transparent border-[1.5px] border-cardTitle rounded px-5 py-[18px] text-white placeholder:text-primary my-1"
            type="text"
            placeholder="Name"
          />
        </Field>

        <Field error={errors.phone} hasBtn={true}>
          <input
            {...register("phone", {
              required: "Please enter your phone number",
            })}
            className="w-full h-[64px] bg-transparent border-[1.5px] border-cardTitle rounded px-5 py-[18px] text-white placeholder:text-primary my-1"
            type="phone"
            placeholder="Phone Number"
          />
        </Field>

        <Field error={errors.otp} cross={true}>
          <div className='relative'>
            <input
              {...register("otp", {
                required: "Please enter your OTP",
              })}
              className="w-full h-[64px] bg-transparent border-[1.5px] border-cardTitle rounded px-5 py-[18px] text-white placeholder:text-primary my-1"
              type="text"
              placeholder="OTP"
              id="cross"
            />
            <span className='absolute w-6 h-6 right-4 top-1/3 text-[#A0A49D] grid place-content-center cursor-pointer' onClick={doCrossFunc}><RxCross1 /></span>
          </div>
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
          value="Sign Up"
        />
      </form>
      <div className="separator text-gray mt-[26px]">
        <span>or</span>
      </div>
    </div>
  );
}
