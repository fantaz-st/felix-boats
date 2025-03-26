import classes from "./Accomplishments.module.css";

const Accomplishments = () => {
  return (
    <div className={classes.container}>
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
