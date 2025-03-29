import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  // Create the shared button content.
  const content = (
    <>
      <p>{props.children}</p>
      {props.arrow && (
        <div className={classes.arrow}>
          <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path d='M9 8.5H16.5V16' stroke='#fff' strokeWidth='1.2'></path>
              <path d='M16.5 8.5L7 18' stroke='#fff' strokeWidth='1.2'></path>
            </g>
          </svg>
        </div>
      )}
    </>
  );

  // If a link prop is provided, render a Next.js Link.
  if (props.link) {
    return (
      <Link href={props.link} passHref legacyBehavior>
        <a className={`${classes.container} ${props.variant === "up" ? classes.up : classes.scale}`} style={{ ...props.style }}>
          {content}
        </a>
      </Link>
    );
  } else {
    // Otherwise, render a button element with an optional onClick.
    return (
      <button type={props.type || "button"} onClick={props.onClick} className={`${classes.container} ${props.variant === "up" ? classes.up : classes.scale}`} style={{ ...props.style }}>
        {content}
      </button>
    );
  }
};

export default Button;
