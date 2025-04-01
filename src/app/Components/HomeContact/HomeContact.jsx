import classes from "./HomeContact.module.css";

const HomeContact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.center}>
          <h1>Contact us</h1>
          <div className={classes.largeButton}>
            <p>Do you need more information?</p>
            <a className={classes.button} href='mailto:info@felixboats.com'>
              <p>Ask away</p>
            </a>
          </div>
          <div className={classes.flex}>
            <div className={classes.company}>
              <p>OBRAZ d.o.o.</p>
              <p>Biokovska 4, HR-21000 Split</p>
              <p>OIB: 36125969444</p>
            </div>
            <div className={classes.contact}>
              <p>
                Email: <a href='mailto:info@felixboats.com'>info@felixboats.com</a>
              </p>
              <p>
                Phone: <a href='tel:+385997973959'>+385 99 797 3959</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
