/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ProductImage({ images }) {
  const [active, setActive] = useState(0);
  
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-6 ">
      <div className="flex max-h-[576px] flex-row sm:flex-col gap-[15px] ">
        {images.length &&
          images.map((single, index) => (
            <figure
              onClick={() => setActive(index)}
              key={index}
              className={`w-[100px] sm:w-[120px] max-h-[137px] rounded-[5px] inline-block ${
                active == index && "border-[1px] border-accent1"
              }`}
            >
              <img
                className="rounded-[5px]"
                src={single.url}
                alt={single.url}
              />
            </figure>
          ))}
      </div>
      <figure className="w-[350px] xl:w-[506px] max-h-[576px]">
        <img
          className="rounded-[10px] w-full h-full object-cover object-center"
          src={images[active].url}
          alt={images[active].url}
        />
      </figure>
    </div>
  );
}
