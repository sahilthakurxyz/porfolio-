import React from "react";
import styles from "./myprojects.module.css";
const MyProjects = () => {
  return (
    <div id="project" className={styles["project"]}>
      <div className={styles["container"]}>
        <h1 className={styles["sub-title"]}>My Projects</h1>
        <div className={styles["project-list"]}>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <h2 className={styles["project-title"]}>Ecommerce</h2>
            <p className={styles["project-p"]}>
              developing, and deploying a comprehensive e-commerce website for
              shopping products. Skilled in both front-end and back-end
              development, adept at creating a user-friendly and feature-rich
              shopping experience. Front-End: HTML5, CSS3, JavaScript (React)
              Back-End: ( - Node.js with Express, Third Party Modules) Database:
              (MongoDB) Version Control: Git Additional Tools: (test Payment
              with Stripe.) Features: User Interface: Designed and developed a
              visually appealing and responsive user interface for product
              browsing, searching, and management. Product Management:
              Implemented functionalities for CRUD (Create, Read, Update,
              Delete) operations on products, including adding descriptions,
              images, and managing inventory. User Accounts: Developed user
              registration, login, and profile management functionalities.
              Review System: Enabled users to leave reviews and ratings for
              products. Shopping Cart & Checkout: Built a robust shopping cart
              system with test payment processing integration. Order Management:
              Implemented features for order tracking, status updates, and order
              history. Admin Panel: Created a comprehensive admin panel for
              managing products, users, orders, and website content. Security:
              Implemented security measures to protect user data and prevent
              vulnerabilities.
            </p>
            <a
              href="https://your-personal-shop.vercel.app"
              target="_blank"
              className={styles["project-link"]}
            >
              use it!
            </a>
          </div>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-address-card"></i>
            <h2 className={styles["project-title"]}>Admin-Dashboard</h2>
            <p className={styles["project-p"]}>
              Feature: React JS and Tailwind CSS were used to create this
              completely responsible admin dashboard web application. Work with
              the Syncfusion Library, which offers many fascinating and
              practical features, such as the ability to create graphs by simply
              providing data, include other real world features . Tech stack:
              React Js which use with HTML, Javascript and Tailwind CSS for
              Styling Contribution: There are numerous different components,
              including Ecommerce (which displays statistics on earnings, total
              customers, items, sales revenue, and expense budget with a graph
              utilizing prewritten data in a project similar to an api) Similar
              to e-commerce, there are a number of components, including Orders,
              Employees, and Customers, for which I have prewritten data that I
              use as an Api from my data file.
            </p>
            <a
              href="https://sahilthakurxyz.github.io/Admin_dashboard"
              target="_blank"
              className={styles["project-link"]}
            >
              visit it!
            </a>
          </div>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-file"></i>
            <h2 className={styles["project-title"]}>Resume</h2>
            <p className={styles["project-p"]}>
              Feature : This app is used to convert one currency into another
              while the exchange rate of the other currency is changing in
              realtime. use API to pull the names, country codes, and currencies
              of every country. API https://api.frankfurter.app/currencies Tech
              stack: HTML, CSS, JAVASCRIPT Contribution : The purpose of the
              currency converter is to change one currency into another. You
              will benefit greatly from its numerous useful applications for
              both enterprises and tourists.
            </p>
            <a
              href="https://sahilthakurxyz.github.io/currency-converter"
              target="_blank"
              className={styles["project-link"]}
            >
              check this!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
