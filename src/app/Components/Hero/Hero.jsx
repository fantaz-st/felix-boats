import Image from "next/image";
import Button from "../Button/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1 className={classes.title}>Felix Boats</h1>
        <h3 className={classes.subtitle}>High-performance speed boats that turn heads and dominate the waves.</h3>
        <Button arrow={true} link='/contact'>
          Contact us
        </Button>
      </div>
      <div className={classes.background}>
        <Image src='/assets/images/hero-bg.jpeg' fill alt='Boat on the water' />
      </div>
      <div className={classes.overlay}></div>
    </div>
  );
};

export default Hero;
