import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import phone from "../../assets/customer/Call.svg";
import location from "../../assets/customer/location.svg";
import user from "../../assets/customer/name.svg";
import Field from "./Field";
export default function CustomerInfo() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getData = ["name", "phone", "address", "charge", "method"];

  const setData = (data) => {
    navigate('/login');
    console.log(data);
  };
  return (
    <div className="max-w-[411px] w-full">
        <h3 className="text-[24px] font-medium text-neutral-50 mb-4">
            Customer Information
          </h3>
      <form  onSubmit={handleSubmit(setData)}>
        {/* Name input */}
        <Field label={getData[0]} htmlFor={getData[0]} error={errors.name}>
          <div className="w-full h-[48px] rounded bg-zinc-50 p-3 flex mt-2">
            <figure className="w-6 h-6 mr-2">
              <img className="w-6 h-6" src={user} alt="user" />
            </figure>
            <input
              {...register(getData[0], { required: "Please give your name" })}
              className="flex-1 outline-none placeholder:text-neutral-500 text-[16px]"
              type="text"
              name={getData[0]}
              id={getData[0]}
              placeholder="Type your name"
            />
          </div>
        </Field>

        {/* Phone number Input */}
        <Field label={"phone number"} htmlFor={getData[1]} error={errors.phone}>
          <div className="w-full h-[48px] rounded bg-zinc-50 p-3 flex mt-2">
            <figure className="w-6 h-6 mr-2">
              <img className="w-6 h-6" src={phone} alt="phone" />
            </figure>
            <input
              {...register(getData[1], {
                required: "Please give your phone number",
                maxLength: { value: 11, message: "maximum 11 value required" },
              })}
              className="flex-1 outline-none placeholder:text-neutral-500 text-[16px]"
              type="phone"
              name={getData[1]}
              id={getData[1]}
              placeholder="Your phone number"
            />
          </div>
        </Field>

        {/* Address Input */}
        <Field label={getData[2]} htmlFor={getData[2]} error={errors.address}>
          <div className="w-full h-[48px] rounded bg-zinc-50 p-3 flex mt-2">
            <figure className="w-6 h-6 mr-2">
              <img className="w-6 h-6" src={location} alt="location" />
            </figure>
            <input
              {...register(getData[2], {
                required: "Please give your address",
              })}
              className="flex-1 outline-none placeholder:text-neutral-500 text-[16px]"
              type="text"
              name={getData[2]}
              id={getData[2]}
              placeholder="Your address"
            />
          </div>
        </Field>

        {/* Delivary charge input */}
        <Field
          label={"delivary charge"}
          htmlFor={getData[3]}
          error={errors.charge}
        >
          <div className="w-full h-[48px] rounded  py-3 flex mt-2 justify-between items-center">
            <div className="flex gap-2 items-center">
              <input
                {...register(getData[3])}
                className="flex-1 outline-none placeholder:text-neutral-500 text-[16px] appearance-none border-[#94A3B8] checked:border-accent1 checked:border-[6px] w-5 h-5 border-[1.5px]  rounded-full"
                type="radio"
                name={getData[3]}
                id={"inside"}
                value="60"
                checked={true}
              />
              <label htmlFor={"inside"} className="text-white capitalize font-normal font-onest">
                inside Dhaka tk.60
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                {...register(getData[3])}
                className="flex-1 outline-none placeholder:text-neutral-500 text-[16px] appearance-none checked:border-accent1 checked:border-[6px]  w-5 h-5 border-[1.5px] border-[#94A3B8] rounded-full"
                type="radio"
                name={getData[3]}
                id={"outside"}
                value="120"
              />
              <label htmlFor={"outside"} className="text-white capitalize font-normal font-onest">
                outside Dhaka tk.120
              </label>
            </div>
          </div>
        </Field>

        {/* payment method */}
        <Field
          label={"payment method"}
          htmlFor={getData[2]}
          error={errors.method}
        >
          <div className="w-full h-[48px] rounded bg-zinc-50 p-3 flex mt-2 items-center gap-2">
            <input
              {...register(getData[4], {
                required: "Please give your payment method",
              })}
              className="shink-0 outline-none text-[16px] appearance-none checked:border-accent1 checked:border-[6px]  w-5 h-5 border-[1.5px] border-[#94A3B8] rounded-full"
              type="radio"
              name={getData[4]}
              id={getData[4]}
              value="cashOn"
            />
            <label
              className="#1e293b font-medium capitalize"
              htmlFor={getData[4]}
            >
              cash on delivary
            </label>
          </div>
        </Field>

        {/* submited Data */}
        <input
          className="bg-accent1 w-full h-12 rounded text-white capitalize mt-8 cursor-pointer"
          type="submit"
          value="place order"
        />
      </form>
    </div>
  );
}
