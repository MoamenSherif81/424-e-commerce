import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Carousel.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Carousel() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        className="position-relative home-carousel"
      >
        <SwiperSlide>
          <img className="w-100" src="/assets/images/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-100" src="/assets/images/2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-100" src="/assets/images/3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-100" src="/assets/images/4.jpg" alt="" />
        </SwiperSlide>
        <div className="carousel-prev"><FaAngleLeft /></div>
        <div className="carousel-next"><FaAngleRight /></div>
      </Swiper>
    </div>
  );
}
