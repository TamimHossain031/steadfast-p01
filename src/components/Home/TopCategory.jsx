// import Swiper core and required modules
import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../Db/category";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SingleCategory from "./SingleCategory";

export default function TopCategory() {
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
    <section className="container mb-[135px]">
      <div className="align-middle mb-[48px] flex justify-between">
        <h2 className="title ">Top Categories</h2>
        <div className="flex gap-4 *:w-[48px] *:h-[48px] *:grid *:place-content-center">
          <button className={isFirst ? "disable" : ""} onClick={handlePrev}>
            <BsArrowLeft color="white" size={20} />{" "}
          </button>
          <button className={isLast ? "disable" : ""} onClick={handleNext}>
            {" "}
            <BsArrowRight color="white" size={20} />
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
          1000: {
            slidesPerView: 4,
          },
        }}
      >
        {data.length &&
          data.map((slide, index) => (
            <SwiperSlide key={index}>
              <SingleCategory data={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
