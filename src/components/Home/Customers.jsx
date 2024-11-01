import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../Db/customerFeedback";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SingleCustomer from "../SingleCustomer";

export default function Customers() {
  return (
    <section className="container text-center">
      <h2 className="title mb-4">Our Happy Customers</h2>
      <p className='mb-[95px]'>
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate{" "}
      </p>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="customerSwiper"
        >
       {data.length && data.map((single,index)=>(
             <SwiperSlide key={index}>
             <SingleCustomer data={single}/>
           </SwiperSlide>
        ))}
         
        </Swiper>
      </>
    </section>
  );
}
