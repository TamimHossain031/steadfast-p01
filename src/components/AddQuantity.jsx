/* eslint-disable react/prop-types */
import { HiMiniMinusSmall, HiMiniPlus } from "react-icons/hi2";
export default function AddQuantity({ setData, getData }) {
  const { quantity } = getData;
  const setQuantity = (data) => {
    setData({
      type: "quantity",
      payload: data == "plus" ? quantity + 1 : quantity - 1,
    });
  };
  

  return (
    <div>
      <h3 className="capitalize font-medium leading-[150%] text-white mb-4">
        quantity
      </h3>
      <div className="flex justify-evenly w-[137px] h-[40px] bg-neutral-100 *:w-[45px] *:grid *:place-content-center">
        <button
          className="text-quantityBtn text-[24px] font-bold"
          onClick={() => setQuantity("minus")}
        >
          <HiMiniMinusSmall />
        </button>
        <span className="font-medium text-quantityColor font-workSans">
          {quantity.toString().padStart(2, "0")}
        </span>
        <button
          className="text-quantityBtn text-[24px] font-bold"
          onClick={() => setQuantity("plus")}
        >
          <HiMiniPlus />
        </button>
      </div>
    </div>
  );
}
