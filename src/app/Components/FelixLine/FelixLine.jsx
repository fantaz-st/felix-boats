import Image from "next/image";
import classes from "./FelixLine.module.css";
import Button from "../Button/Button";

const FelixLine = () => {
  return (
    <div className={classes.container}>
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
              <Image src='/assets/images/hero-bg.jpeg' alt='Felix 33 speed boat' fill />
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
              <Image src='/assets/images/hero-bg.jpeg' alt='Felix 33 speed boat' fill />
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
              <Image src='/assets/images/hero-bg.jpeg' alt='Felix 33 speed boat' fill />
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
