/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ProductImage({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-6">
      <div className="grid gap-[15px]">
        {images.length &&
          images.map((single, index) => (
            <figure
              onClick={() => setActive(index)}
              key={index}
              className={`w-[120px] h-[137px] rounded-[5px] ${
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
      <figure>
        <img
          className="rounded-[10px]"
          src={images[active].url}
          alt={images[active].url}
        />
      </figure>
    </div>
  );
}
