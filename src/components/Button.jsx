/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";
export default function Button(props) {
  return (
    <button
      className={`hover-effect1 mt-[54px] text-white ${props?.className}`}
    >
      shop now{" "}
      <span className="pt-[4px]  transition-all">
        <GoArrowRight />
      </span>
    </button>
  );
}
