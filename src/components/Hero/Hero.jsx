import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shirin</h1>
        <p className={styles.description}>Talented individual with strong team spirit, keen eye for details, and B.S. in Software Engineering. Offering outstanding ability to work with various programming languages, including Java , C#, Python, and PHP. Reach out if you'd like to learn more!</p>
        <a href="mailto: writeshirin@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
