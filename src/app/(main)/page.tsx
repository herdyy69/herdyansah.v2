import styles from "./page.module.scss";
import { Hero } from "@/components/hero/hero";
import { MySelf } from "@/components/mySelf/mySelf";
import { Portfolio } from "@/components/portfolio/portfolio";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <div className={styles.show}>
        <MySelf />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
