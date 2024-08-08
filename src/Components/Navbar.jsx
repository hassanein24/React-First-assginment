import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS Module

const Navbar = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Default value

  const handleScroll = () => {
    setIsSmall(window.scrollY > 10);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${isSmall ? styles.small : ""}`}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__logo}>
            <NavLink 
              to="/" 
              className={activeLink === "home" ? styles.active : ""}
              onClick={() => handleLinkClick("home")}
            >
              <h1 className="text-3xl">START FRAMEWORK</h1>
            </NavLink>
          </div>
          <ul className={styles.navbar__links}>
            <li className={styles.navbar__link}>
              <NavLink
                to="/about"
                className={activeLink === "about" ? styles.active : ""}
                onClick={() => handleLinkClick("about")}
              >
                ABOUT
              </NavLink>
            </li>
            <li className={styles.navbar__link}>
              <NavLink
                to="/port"
                className={activeLink === "portfolio" ? styles.active : ""}
                onClick={() => handleLinkClick("portfolio")}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className={styles.navbar__link}>
              <NavLink
                to="/contact"
                className={activeLink === "contact" ? styles.active : ""}
                onClick={() => handleLinkClick("contact")}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
