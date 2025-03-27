"use client";

import Image from "next/image";
import classes from "./FelixLine.module.css";
import Button from "../Button/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { useRef } from "react";

const FelixLine = () => {
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
          <h1 className={classes.title}>The Felix Line</h1>
          <p className={classes.subTitle}>The Felix line introduces three aluminum speed boats—33ft, 35ft, and 37ft—engineered for peak performance. Each model showcases sleek aesthetics and robust construction for an exhilarating ride on every journey.</p>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Felix 33</h2>
            <p className={classes.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className={classes.cardImage}>
              <Image src='/assets/images/hero-bg.jpeg' alt='Felix 33 speed boat' fill sizes='(min-width: 780px) 22.66vw, 71.09vw' />
              <div className={classes.cardButton}>
                <Button variant='up' arrow={true} link='/felix33' style={{ width: "100%" }}>
                  Find out more
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Felix 33</h2>
            <p className={classes.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className={classes.cardImage}>
              <Image src='/assets/images/hero-bg.jpeg' alt='Felix 33 speed boat' fill sizes='(min-width: 780px) 22.66vw, 71.09vw' />
              <div className={classes.cardButton}>
                <Button variant='up' arrow={true} link='/felix33' style={{ width: "100%" }}>
                  Find out more
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Felix 33</h2>
            <p className={classes.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className={classes.cardImage}>
              <Image src='/assets/images/hero-bg.jpeg' alt='Felix 33 speed boat' fill sizes='(min-width: 780px) 22.66vw, 71.09vw' />
              <div className={classes.cardButton}>
                <Button variant='up' arrow={true} link='/felix33' style={{ width: "100%" }}>
                  Find out more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FelixLine;
