"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import classes from "./HomeGallery.module.css";
import homeGalleryImages from "./HomeGalleryImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HomeGallery = () => {
  const containerRef = useRef(null);

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  /*  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const items = gsap.utils.toArray(`.${classes.item}`);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          // FROM
          {
            filter: "blur(8px)",
            opacity: 0,
            y: 25,
          },
          // TO
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  ); */

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        <div className={classes.text}>
          <h1 className={classes.title}>Excellence In Everything We Do</h1>
          <p className={classes.subTitle}>We combine our passion for sleek design and precision engineering to build high-performance speed boats that turn heads and dominate the waves.</p>
        </div>
        <div className={classes.gallery}>
          {homeGalleryImages.map((image) => (
            <div key={image.id} className={classes.item}>
              <a data-fancybox='gallery' href={image.image}>
                <Image src={image.image} fill alt={image.alt} style={{ objectFit: "cover" }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
