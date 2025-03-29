"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import classes from "./HomeGallery.module.css";
import homeGalleryImages from "./HomeGalleryImages";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Marquee from "../Marquee/Marquee";

const HomeGallery = () => {
  const containerRef = useRef(null);

  // Fancybox setup
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const splittedTitle = new SplitType(`.${classes.title}`, {
        types: "chars",
        tagName: "span",
      });

      gsap.set(splittedTitle.chars, {
        opacity: 0,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${classes.title}`,
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(splittedTitle.chars, {
          opacity: 1,
          stagger: 0.03,
          duration: 0.5,
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${classes.subTitle}`,
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(`.${classes.subTitle}`, {
          opacity: 1,
          duration: 0.5,
        });

      const items = gsap.utils.toArray(`.${classes.item}`);
      const pairs = [];
      for (let i = 0; i < items.length; i += 2) {
        pairs.push(items.slice(i, i + 2));
      }

      pairs.forEach((pair) => {
        const triggerElement = pair[0];

        gsap.fromTo(
          pair,
          {
            filter: "blur(8px)",
            opacity: 0,
            y: "25%",
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        {/* Title & Subtitle */}
        <div className={classes.text}>
          <h1 className={classes.title}>Excellence In Everything We Do</h1>
          <p className={classes.subTitle}>We combine our passion for sleek design and precision engineering to build high-performance speed boats that turn heads and dominate the waves.</p>
        </div>

        {/* Gallery */}
        <div className={classes.gallery}>
          {homeGalleryImages.map((image) => (
            <div key={image.id} className={classes.item}>
              <a data-fancybox='gallery' href={image.image}>
                <Image src={image.image} fill alt={image.alt} style={{ objectFit: "cover" }} sizes={image.sizes} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default HomeGallery;
