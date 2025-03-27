import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.flexCol}>
          <div className={classes.company}>
            <h3>OBRAZ d.o.o.</h3>
            <p>Biokovska 4, Split</p>
            <p>OIB:36125969444</p>
          </div>
          <div className={classes.fantaz}>
            <p>
              designed &
              <br />
              developed
              <br />
              <a href='mailto:fantaz@outlook.com'>by fantaz</a>
            </p>
          </div>
        </div>

        <div className={classes.copyright}>
          <p>Copyright © 2025 Felix boats - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
