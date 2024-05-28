import React from "react";
import styles from "./mywork.module.css";
const Mywork = () => {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.subTitle}>My Work</h1>
        <div className={styles.workList}>
          <div className={styles.work}>
            <img
              src="Images/work1.png"
              alt="error"
              width="400px"
              height="250px"
            />
            <div className={styles.layer}>
              <h3>Web Applications</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, necessitatibus! Sapiente consequatur natus, itaque
                commodi, ipsam, accusantium molestias odio aut obcaecati sequi
                porro vero dignissimos reprehenderit nihil numquam quisquam!
                Saepe.
              </p>
              <a href="#">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className={styles.work}>
            <img
              src="Images/music.png"
              alt="error"
              width="400px"
              height="250px"
            />
            <div className={styles.layer}>
              <h3>Music Application</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, necessitatibus! Sapiente consequatur natus, itaque
                commodi, ipsam, accusantium molestias odio aut obcaecati sequi
                porro vero dignissimos reprehenderit nihil numquam quisquam!
                Saepe.
              </p>
              <a href="#">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className={styles.work}>
            <img
              src="Images/shopping.png"
              alt="error"
              width="400px"
              height="250px"
            />
            <div className={styles.layer}>
              <h3>Shopping Site</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, necessitatibus! Sapiente consequatur natus, itaque
                commodi, ipsam, accusantium molestias odio aut obcaecati sequi
                porro vero dignissimos reprehenderit nihil numquam quisquam!
                Saepe.
              </p>
              <a href="#">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#Contact-us" className={styles.btn}>
          See more
        </a>
      </div>
    </div>
  );
};

export default Mywork;
