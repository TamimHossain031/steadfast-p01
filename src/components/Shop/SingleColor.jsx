/* eslint-disable react/prop-types */
import { IoCheckmarkSharp } from "react-icons/io5";
export default function SingleColor({ color, check, handleColor }) {
  const style = {
    background: `${color.hexCode}`,
  };

  return (
    <div
      className="w-[53px] h-[63px] cursor-pointer"
      onClick={() => handleColor(color.hexCode)}
    >
      <div
        className={`w-10 h-10 rounded-[5px] grid place-content-center text-white`}
        style={style}
      >
        {check && <IoCheckmarkSharp />}
      </div>
      <p className="text-white mt-1 capitalize">{"red"}</p>
    </div>
  );
}
