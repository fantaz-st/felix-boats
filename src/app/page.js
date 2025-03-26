import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FelixLine from "./Components/FelixLine/FelixLine";
import HomeGallery from "./Components/HomeGallery/HomeGallery";
import Accomplishments from "./Components/Accomplishments/Accomplishments";
import HomeContactForm from "./Components/HomeContactForm/HomeContactForm";
import Footer from "./Components/Footer/Footer";

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
