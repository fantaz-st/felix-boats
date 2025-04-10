"use client";

import Image from "next/image";
import Button from "../Button/Button";
import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        {/* Left side: image */}
        <div className={classes.left}>
          <div className={classes.imageWrapper}>
            <Image src='/assets/images/hero-bg.jpeg' alt='Felix boats contact form image' fill sizes='(min-width: 1200px) calc(22.17vw + 819px), (min-width: 1160px) calc(40vw + 873px), (min-width: 900px) calc(37.5vw + 823px), 90vw' />
          </div>
        </div>

        {/* Right side: form */}
        <div className={classes.right}>
          <form className={classes.form}>
            <div className={classes.text}>
              <h1 className={classes.title}>{props.boat.name} Inquiry</h1>
              <p className={classes.subTitle}>We are always here to help you with any questions you may have. Please feel free to reach out to us at any time.</p>
            </div>

            {/* Row 1: First Name + Last Name */}
            <div className={classes.formRow}>
              <div className={classes.formGroup}>
                <label htmlFor='firstName' className={classes.formLabel}>
                  First Name *
                </label>
                <input type='text' id='firstName' name='firstName' placeholder='First Name' className={classes.input} required />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor='lastName' className={classes.formLabel}>
                  Last Name *
                </label>
                <input type='text' id='lastName' name='lastName' placeholder='Last Name' className={classes.input} required />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className={classes.formRow}>
              <div className={classes.formGroup}>
                <label htmlFor='email' className={classes.formLabel}>
                  Email *
                </label>
                <input type='email' id='email' name='email' placeholder='Email' className={classes.input} required />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor='phone' className={classes.formLabel}>
                  Phone/Mobile *
                </label>
                <input type='tel' id='phone' name='phone' placeholder='Phone/Mobile' className={classes.input} required />
              </div>
            </div>

            {/* Message */}
            <div className={classes.formGroup}>
              <label htmlFor='message' className={classes.formLabel}>
                Message *
              </label>
              <textarea id='message' name='message' placeholder='Message' className={classes.textArea} required />
            </div>

            <div className={classes.submitButton}>
              <Button arrow={true} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
