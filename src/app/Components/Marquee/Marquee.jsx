"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import horizontalLoop from "@/app/helpers/horizontalScroll";
import classes from "./Marquee.module.css";

const Marquee = () => {
  const containerRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    // Select all elements with the .card class
    const allCards = gsap.utils.toArray(`.${classes.card}`);
    // Start the horizontal loop if not already started
    if (!loopRef.current) {
      loopRef.current = horizontalLoop(allCards, {
        repeat: -1,
        speed: 0.85,
        paddingRight: 64,
      });
    }
  }, []);

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.gradient}></div>
      <div className={classes.inner}>
        <div className={classes.marqueeWrapper}>
          <div className={classes.marqueeInner}>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.title}>FELIX</h1>
              <p className={classes.subTitle}>boats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
