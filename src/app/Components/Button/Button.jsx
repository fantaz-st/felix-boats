import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={props.variant === "up" ? `${classes.container} ${classes.up}` : `${classes.container} ${classes.scale}`} style={{ ...props.style }}>
      <p>{props.children}</p>
      {props.arrow ? (
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
      ) : null}
    </button>
  );
};

export default Button;
