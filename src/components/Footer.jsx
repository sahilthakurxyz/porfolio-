import React from "react";
import styles from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=100007402210241"
              className={styles.icon}
            >
              <p>Facebook</p>:
              <FaFacebookSquare />
            </a>
            <a href="https://x.com/7012Sahil77887" className={styles.icon}>
              <p>Twitter</p>:
              <FaSquareXTwitter />
            </a>
            <a
              href="https://github.com/sahilthakurxyz?tab=repositories"
              className={styles.icon}
            >
              <p>Github</p>:
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-thakur-735181203/"
              className={styles.icon}
            >
              <p>LinkedIn</p>:
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
