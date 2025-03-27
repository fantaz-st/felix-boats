"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { useRef } from "react";
import classes from "./Accomplishments.module.css";

const Accomplishments = () => {
  const containerRef = useRef(null);

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

      gsap.fromTo(
        `.${classes.card}`,
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
            trigger: `.${classes.cards}`,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        <div className={classes.text}>
          <h1 className={classes.title}>Our Accomplishments</h1>
          <p className={classes.subTitle}>We combine our passion for sleek design and precision engineering to build high-performance speed boats that turn heads and dominate the waves.</p>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <p className={classes.cardTitle}>Boats built</p>
            <h1 className={classes.cardDescription}>20+</h1>
          </div>
          <div className={classes.card}>
            <p className={classes.cardTitle}>Boats built</p>
            <h1 className={classes.cardDescription}>10</h1>
          </div>
          <div className={classes.card}>
            <p className={classes.cardTitle}>Boats built</p>
            <h1 className={classes.cardDescription}>20+</h1>
          </div>
          <div className={classes.card}>
            <p className={classes.cardTitle}>Customer satisfaction</p>
            <h1 className={classes.cardDescription}>100%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
