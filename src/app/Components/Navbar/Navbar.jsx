"use client";

import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? `${classes.container} ${classes.scrolled}` : classes.container}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <h1>
            <a href='/'>FELIX Boats</a>
          </h1>
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
