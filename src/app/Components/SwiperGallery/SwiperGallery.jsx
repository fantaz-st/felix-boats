"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./SwiperGallery.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Arrow = () => (
  <div className={classes.arrow}>
    <svg fill='#fff' height='25px' width='25px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          id='XMLID_222_'
          d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'
        ></path>
      </g>
    </svg>
  </div>
);
const SwiperGallery = (props) => {
  // Fancybox setup
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className={classes.container}>
      <Swiper
        spaceBetween={10}
        loop={false}
        parallax={true}
        modules={[Navigation, Parallax, Pagination]}
        navigation={{
          prevEl: `.${classes.left}`,
          nextEl: `.${classes.right}`,
        }}
        breakpoints={{
          1600: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2.5 },
          768: { slidesPerView: 2.5 },
          360: { slidesPerView: 1.1 },
        }}
        className='swiper-istaknuto'
      >
        {props?.boat?.photos.map((photo, i) => (
          <SwiperSlide key={props.boat.name + i} /* className='swiper-slide' */>
            <a data-fancybox='gallery' href={photo}>
              <div className={classes.slideImageWrapper}>
                <Image key={i} src={photo} alt={`${props.boat.name} photo ${i + 1}`} className={classes.boatPhoto} fill />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.left}>
        <Arrow />
      </div>
      <div className={classes.right}>
        <Arrow />
      </div>
    </div>
  );
};

export default SwiperGallery;
