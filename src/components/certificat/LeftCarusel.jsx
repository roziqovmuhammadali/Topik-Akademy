import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const LeftCarusel = () => {
  return (
    // import Swiper core and required modules

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      autoplay={{ delay: 700, disableOnInteraction: false }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      <SwiperSlide>
        <img
          src="https://optim.tildacdn.pub/tild3131-6162-4436-b066-336161303636/-/resize/654x/-/format/webp/noname_1_page-0001.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://optim.tildacdn.pub/tild6537-6337-4238-a138-336561656364/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/486x/-/format/webp/noname_12_page-0001.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://optim.tildacdn.pub/tild3239-6530-4163-a266-306438333536/-/resize/486x/-/format/webp/noname_page-0001_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/486x/-/format/webp/noname_12_page-0001.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://optim.tildacdn.pub/tild6333-3934-4464-b164-663263616132/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.tildacdn.com/tild3332-3135-4034-b965-613430363666/photo_2023-01-29_08-.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.tildacdn.com/tild3734-3062-4339-b936-323936656136/photo_2023-01-29_08-.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default LeftCarusel;
