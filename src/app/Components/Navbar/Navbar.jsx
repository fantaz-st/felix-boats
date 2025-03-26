"use client";
import { useState } from "react";
import classes from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className={scrolled ? `${classes.container} ${classes.scrolled}` : classes.container}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <h1>FELIX Boats</h1>
        </div>
        <div className={classes.right}>
          <div className={classes.contactUsButton}>
            <Button arrow={true} link='/contact'>
              Contact us
            </Button>
          </div>

          <div className={classes.hamburger}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
