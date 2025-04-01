import React from "react";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

import SwiperGallery from "@/app/Components/SwiperGallery/SwiperGallery";
import Image from "next/image";
import ContactForm from "@/app/Components/ContactForm/ContactForm";
import Steps from "@/app/Components/Steps/Steps";

export async function generateStaticParams() {
  // Predefine the available boat slugs:
  return [{ slug: "felix33" }, { slug: "felix35" }, { slug: "felix37" }];
}

export default async function BoatPage({ params }) {
  try {
    const boatModule = await import(`@/data/boats/${params.slug}.js`);
    const boat = boatModule.default;

    if (!boat) {
      // Trigger Next.js 404 page if no boat data is found
      notFound();
    }

    return (
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.heroImage}>
            <Image src={boat.featuredImage} alt={boat.name} fill priority sizes='100vw' />
          </div>
        </div>
        <section className={classes.boatInfoContainer}>
          <div className={classes.inner}>
            <h1 className={classes.boatName}>{boat.name}</h1>
            <p className={classes.boatDescription}>{boat.description}</p>
          </div>
        </section>
        <SwiperGallery boat={boat} />
        <section className={classes.technicalSpecsContainer}>
          <div className={classes.inner}>
            <h1 className={classes.title}>{boat.name} Technical Specifications</h1>
          </div>
          <div className={classes.cards}>
            {boat.specs.map((spec, index) => (
              <div key={index} className={classes.card}>
                <p className={classes.cardTitle}>{spec.title}</p>
                <h1 className={spec.smaller ? `${classes.smaller} ${classes.cardDescription}` : `${classes.cardDescription}`}>{spec.description}</h1>
              </div>
            ))}
          </div>
        </section>
        <section className={classes.buyingProcessContainer}>
          <div className={classes.inner}>
            <h1 className={classes.title}>Ordering and Buying</h1>
            <Steps />
          </div>
        </section>
        <ContactForm boat={boat} />
      </div>
    );
  } catch (error) {
    console.error("Error loading boat data:", error);
    notFound();
  }
}
