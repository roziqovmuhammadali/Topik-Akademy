// Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Pagination } from "swiper";

// Swiper modullarini o'rnatish
SwiperCore.use([Autoplay, Pagination]);

const images = [
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg",
  "https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
];

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "20%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
