"use client";
import { useRef, useEffect } from "react";
import classes from "./Steps.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Steps = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = containerRef.current.querySelectorAll(`.${classes.card}`);

      cards.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: () => `top center-=100`,
            end: () => `bottom center+=60`,
            scrub: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
          scale: () => 1 - (cards.length - index) * 0.025,
          rotate: 0,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * 20} center-=200`,
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom center+=300",
          invalidateOnRefresh: true,
          markers: true,
        });
      });
    },
    { scope: containerRef.current }
  );

  return (
    <div className={classes.stacking} ref={containerRef}>
      <div className={classes.card}>
        <h1>1.</h1>
        <p>Step one content...</p>
      </div>
      <div className={classes.card}>
        <h1>2.</h1>
        <p>Step two content...</p>
      </div>
      <div className={classes.card}>
        <h1>3.</h1>
        <p>Step three content...</p>
      </div>
      <div className={classes.card}>
        <h1>4.</h1>
        <p>Step four content...</p>
      </div>
    </div>
  );
};

export default Steps;
