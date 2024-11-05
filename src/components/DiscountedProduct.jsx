// import Swiper core and required modules
import { useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
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
    // Recently discounted product
    <section className="container mt-[100px]">
      <div className="mb-6 md:mb-[48px] flex justify-between items-end">
        <h2 className="title">Recently Discounted</h2>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <Link className="f-title md:mr-6 text-primary">View All</Link>
          
          <div className='flex gap-4'>
          <button
            className={`${
              isFirst ? "disable bg-gray" : "bg-neutral-100"
            } w-[48px] h-[48px] rounded-full flex justify-center items-center`}
            onClick={handlePrev}
          >
            <GoChevronLeft size={20} />{" "}
          </button>
          <button
            className={`${
              isLast ? "disable bg-gray" : "bg-neutral-100"
            } w-[48px] h-[48px] rounded-full flex justify-center items-center`}
            onClick={handleNext}
          >
            {" "}
            <GoChevronRight size={20} />
          </button>
            </div>
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
          640: {
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
              <SwiperSlide className='text-center' key={index}>
                <SingleProduct data={slide} />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
}
