"use client";

import Image from "next/image";
import Button from "../Button/Button";
import classes from "./Hero.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const splittedTitle = new SplitType(`.${classes.title}`, {
        types: "chars",
        tagName: "span",
      });

      const tl = gsap.timeline();
      gsap.set(`.${classes.text}`, {
        autoAlpha: 1,
      });
      tl.to(splittedTitle.chars, {
        y: "0%",
        stagger: 0.03,
        duration: 0.75,
      }).to(`.${classes.subtitle}`, {
        opacity: 1,
        duration: 0.5,
      });
    },
    { scope: containerRef }
  );
  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.text}>
        <h1 className={classes.title}>Felix Boats</h1>
        <p className={classes.subtitle}>High-performance speed boats that turn heads and dominate the waves.</p>
        <Button arrow={true} link='/contact'>
          Contact us
        </Button>
      </div>
      <div className={classes.background}>
        <Image src='/assets/images/hero-bg.jpeg' fill alt='Boat on the water' sizes='100vw' />
      </div>
      <div className={classes.overlay}></div>
    </div>
  );
};

export default Hero;
