import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const HomeGallery = dynamic(() => import("./Components/HomeGallery/HomeGallery"), {
  loading: () => <p>Loading...</p>,
});
const FelixLine = dynamic(() => import("./Components/FelixLine/FelixLine"), {
  loading: () => <p>Loading...</p>,
});
const Accomplishments = dynamic(() => import("./Components/Accomplishments/Accomplishments"), {
  loading: () => <p>Loading...</p>,
});
const HomeContactForm = dynamic(() => import("./Components/HomeContactForm/HomeContactForm"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("./Components/Footer/Footer"), {
  loading: () => <p>Loading...</p>,
});

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <HomeGallery />
      <FelixLine />
      <Accomplishments />
      <HomeContactForm />
      <Footer />
    </main>
  );
}
