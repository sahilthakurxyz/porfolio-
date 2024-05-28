import React, { useState } from "react";
import styles from "./about.module.css";
const Aboutme = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={styles["about-mainContainer"]}>
      <div className={styles["about-meDetail"]}>
        <h3>About Me</h3>
        <p>
          Hi, I'm Sahil Thakur from Jammu & Kashmir. I completed my schooling in
          J&K and graduated with a B.Tech in Electronics and Communication.
          During my studies, I worked on projects like an Accident Alert System
          and an RF-based Remote Control Robotic Car using Embedded Systems and
          C. I'm skilled in Java, C, Data Structures and Algorithms, JavaScript,
          React.js, and Node.js. I've built several projects, including this
          portfolio, a currency converter, and a calculator. I also solve
          problems on platforms like LeetCode, HackerRank, and GeeksforGeeks
        </p>
      </div>
      <div className={styles["about-tabContainer"]}>
        <div className={styles.tabTitles}>
          <p
            className={`${styles.tabLinks} ${
              activeTab === "skills" ? styles.activeLink : ""
            }`}
            onClick={() => opentab("skills")}
          >
            Skills
          </p>
          <p
            className={`${styles.tabLinks} ${
              activeTab === "education" ? styles.activeLink : ""
            }`}
            onClick={() => opentab("education")}
          >
            Education
          </p>
          <p
            className={`${styles.tabLinks} ${
              activeTab === "experience" ? styles.activeLink : ""
            }`}
            onClick={() => opentab("experience")}
          >
            Experience
          </p>
        </div>

        <div
          className={`${styles.tabContents} ${
            activeTab === "skills" ? styles.activeTab : ""
          }`}
          id="skills"
        >
          <ul>
            <li>
              <span>Front-end:</span>HTML, CSS, JAVASCRIPT, React Js,
              Redux,Redux Toolkit,
            </li>
            <li>
              <span>Back-end:</span> Node Js, Express Js,
            </li>
            <li>
              <span>Data Base:</span>Mongo DB,NoSQL
            </li>
            <li>
              <span>Data Structure And Algorithm:</span>JAVA
            </li>
          </ul>
        </div>

        <div
          className={`${styles.tabContents} ${
            activeTab === "education" ? styles.activeTab : ""
          }`}
          id="education"
        >
          <ul>
            <li>
              <span>2013-14:</span> 10th - Govt. H.S.S From Jammu & Kashmir
              (J&K) Board
            </li>
            <li>
              <span>2015-16:</span> 12th - Govt. H.S.S in (J&K) Board
            </li>
            <li>
              <span>2016-20:</span> B.Tech (Electronics and Communication) From
              Punjab (MRSPTU)
            </li>
          </ul>
        </div>

        <div
          className={`${styles.tabContents} ${
            activeTab === "experience" ? styles.activeTab : ""
          }`}
          id="experience"
        >
          <ul>
            <li>
              <span>C-language:</span> Naresh IT Technologies
            </li>
            <li>
              <span>Embedded System:</span> 40 days - Training (Chandigarh)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
