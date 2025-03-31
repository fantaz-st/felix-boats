import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.copyright}>
          <p>Copyright © 2025 Felix boats - All Rights Reserved</p>
        </div>
        <div className={classes.fantaz}>
          <p>
            designed & developed <a href='mailto:fantaz@outlook.com'>by fantaz</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
