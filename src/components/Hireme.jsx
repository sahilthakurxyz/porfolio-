import React from "react";
import styles from "./hireme.module.css";
const Hireme = () => {
  return (
    <div className={styles.hireMe}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hire Me</h1>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              I'm a passionate and skilled developer with experience in web
              development. My expertise includes HTML5, CSS3, JavaScript, React,
              Node.js, and more. I've worked on various projects, including
              e-commerce websites, portfolio sites, and web applications.
            </p>
            <p>
              I'm committed to delivering high-quality work and meeting
              deadlines. Let's work together to bring your ideas to life.
            </p>
          </div>
          <div className={styles.contact}>
            <h2>Contact Me</h2>
            <p>Email: sahilthakurxyz@gmail.com</p>
            <p>Phone: +91 600 664 2782</p>
            <p>Location: Jammu, Jammu & Kashmir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hireme;
