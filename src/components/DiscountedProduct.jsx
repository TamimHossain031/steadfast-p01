// import Swiper core and required modules
import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { GoChevronLeft,GoChevronRight } from "react-icons/go";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../Db/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SingleProduct from "./SingleProduct";

export default function DiscountedProduct() {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };
  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;
  return (
    <section className="container mt-[100px]">
      <div className="align-middle mb-[48px] flex justify-between">
        <h2 className="title ">Recently Discounted</h2>
        <div className="flex gap-4 items-center">
            <Link className='f-title mr-6 text-primary'>View All</Link>
          <button className={`${isFirst ? "disable bg-gray" : "bg-neutral-100"} w-[48px] h-[48px] rounded-full flex justify-center items-center`} onClick={handlePrev}>
            <GoChevronLeft size={20} />{" "}
          </button>
          <button className={`${isLast ? "disable bg-gray" : "bg-neutral-100"} w-[48px] h-[48px] rounded-full flex justify-center items-center`} onClick={handleNext}>
            {" "}
            <GoChevronRight size={20} />
          </button>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={4}
        className={"mySwiper"}
        ref={sliderRef}
        onSlideChange={onSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },

          865: {
            slidesPerView: 3,
          },
        }}
      >
        {data.length &&
          data
            .filter((data) => data.label == "sale")
            .map((slide, index) => (
              <SwiperSlide key={index}>
                <SingleProduct data={slide} />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
}
