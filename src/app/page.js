import styles from "./page.module.css";
import Hero from "./Components/Hero/Hero";
import dynamic from "next/dynamic";

const HomeGallery = dynamic(() => import("./Components/HomeGallery/HomeGallery"), {
  loading: () => <p>Loading...</p>,
});
const FelixLine = dynamic(() => import("./Components/FelixLine/FelixLine"), {
  loading: () => <p>Loading...</p>,
});
const Accomplishments = dynamic(() => import("./Components/Accomplishments/Accomplishments"), {
  loading: () => <p>Loading...</p>,
});
const HomeContact = dynamic(() => import("./Components/HomeContact/HomeContact"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <HomeGallery />
      <FelixLine />
      <Accomplishments />
      <HomeContact />
    </main>
  );
}
