"use client";
import classes from "./SwiperGallery.module.css";
import Image from "next/image";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SwiperGallery = (props) => {
  return (
    <div className={classes.container}>
      <Swiper
        style={{ paddingTop: "10px" }}
        spaceBetween={10}
        loop={false}
        parallax={true}
        modules={[Parallax, Pagination]}
        /*  navigation={{
   
    prevEl: `.${classes.left}`,
    nextEl: `.${classes.right}`,
  }} */
        breakpoints={{
          1600: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          360: { slidesPerView: 1.05 },
        }}
        className='swiper-istaknuto'
      >
        {props?.boat?.photos.map((photo, i) => (
          <SwiperSlide key={props.boat.name + i} className='swiper-slide'>
            <div className={classes.slideImageWrapper}>
              <Image key={i} src={photo} alt={`${props.boat.name} photo ${i + 1}`} className={classes.boatPhoto} fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
