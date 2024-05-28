import React, { useState } from "react";
import styles from "./About.module.css";
import image1 from "../../images/s3.png";
const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.aboutCol2}>
            <h1 className={styles.subTitle}>About Me</h1>
            <p className={styles.pColor}>
              Hey, I'm Sahil Thakur. I'm from Jammu & Kashmir (J&K). I have
              completed my schooling in Jammu & Kashmir board and my B.Tech
              graduation in electronics and communication. I have completed
              various projects in my graduation like Accident Alert System, RF
              based Remote Control Robotic car, and various other small projects
              using Embedded Systems and C language. I also have good skills in
              JAVA, C, Data Structure and Algorithm, JAVASCRIPT, REACT JS,
              ANGULAR JS, NODE JS. I have completed various projects in these
              technologies. For example, this portfolio is one of my projects,
              and I've also created a currency converter, calculator, etc.
              Additionally, I solve problems on various platforms like LeetCode,
              HackerRank, GeeksforGeeks, Newton Schools, and many others.
            </p>

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
                  <span>Front-end:</span> JAVASCRIPT, Angular JS, Node JS, HTML,
                  CSS
                </li>
                <li>
                  <span>Web Development:</span> Web Application Development
                </li>
                <li>
                  <span>Programming languages:</span> C, JAVA, Data Structure
                  Algorithm (DSA)
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
                  <span>2016-20:</span> B.Tech (Electronics and Communication)
                  From Punjab (MRSPTU)
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
      </div>
    </div>
  );
};

export default About;
