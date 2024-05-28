import React from "react";
import styles from "./Home.module.css";
import profile from "../../images/my.png";
import resume from "../../images/cv.pdf";
import Header from "../Header";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Aboutme from "../home/Aboutme";
import MyProjects from "../home/MyProjects.jsx";
import Footer from "../Footer.jsx";
const Home = () => {
  const downloadResume = () => {
    const resumeUrl = resume;
    const anchorElement = document.createElement("a");
    anchorElement.href = resumeUrl;
    anchorElement.download = "Sahil_thakur_Resume.pdf";
    document.body.appendChild(anchorElement);

    anchorElement.click();
    document.body.removeChild(anchorElement);
  };
  const ProfessionText = ({ text }) => {
    return (
      <p className={styles["profession"]}>
        {text.split("").map((char, index) => (
          <span key={index} style={{ "--i": index }}>
            {char}
          </span>
        ))}
      </p>
    );
  };
  return (
    <div className={styles["home-mainContainer"]}>
      <div className={styles["home-mainContainerBox"]}>
        <div className={styles["home-mainContainerHeaderBox"]}>
          <Header />
          <div className={styles["home-personalInfoContainer"]}>
            <div className={styles["personal-info"]}>
              <p className={styles["hi"]}>Hii I am </p>
              <p className={styles["name"]}>Sahil Thakur</p>
              <ProfessionText text="Full Stack Developer" />
              <div className={styles["social-links"]}>
                <a href="https://www.linkedin.com/in/sahil-thakur-735181203/">
                  <i className="fab fa-linkedin">
                    <FaLinkedin />
                  </i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100007402210241">
                  <i className="fab fa-facebook">
                    <FaFacebookSquare />
                  </i>
                </a>
                <a href="https://github.com/sahilthakurxyz?tab=repositories">
                  <i className="fab fa-github">
                    <FaGithub />
                  </i>
                </a>
                <a href="https://x.com/7012Sahil77887">
                  <i className="fab fa-twitter">
                    <FaSquareXTwitter />
                  </i>
                </a>
                {/* Add more social links as needed */}
              </div>
              <button onClick={downloadResume}>Download CV</button>
            </div>
            <div className={styles["image-container"]}>
              <img src={profile} alt="Sahil Thakur" />
            </div>
          </div>
        </div>
      </div>

      <Aboutme />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Home;
