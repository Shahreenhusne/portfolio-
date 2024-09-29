import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Shahreen Husne Rabbani</h1>
        <p className={styles.description}>
        I am a dedicated software engineer with a strong foundation in development, honed through diverse experiences at Openhaus and Concord Group. Proficient in Python, React, Node.js, and more, I aim to leverage my skills to drive impactful contributions.
        </p>
        <a href="shahreen.husne.rabbani@gmail.com" target="_black" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/shahreen.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
