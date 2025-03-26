"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import classes from "./HomeGallery.module.css";
import homeGalleryImages from "./HomeGalleryImages";

const HomeGallery = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className={classes.container}>
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
        {/* lol */}
      </div>
    </div>
  );
};

export default HomeGallery;
