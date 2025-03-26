import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      {/* <h3>OBRAZ d.o.o.</h3>
      <p>Biokovska 4, Split</p>
      <p>OIB:36125969444</p> */}
      <div className={classes.inner}>
        <div className={classes.copyright}>
          <p>Copyright © 2025 Felix boats - All Rights Reserved</p>
        </div>
        <div className={classes.fantaz}>
          <a href='mailto:fantaz@outlook.com'>designed and developed - fantaz</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
