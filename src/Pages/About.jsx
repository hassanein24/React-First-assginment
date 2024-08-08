// About.js
import React from "react";
import styles from "./About.module.css";
import { FaStar } from "react-icons/fa";
import Title from '../Components/Title';
export default function About() {
  return (<>
  
    <Title title="About" />
    <div className={styles.back}>
      <div className={styles.headingcontainer}>
        <h2 className="text-white text-5xl font-bold pt-60">ABOUT COMPONENT</h2>
        <div className={styles.line}>
          <FaStar className={styles.star} />
        </div>

        <div className="container mx-auto px-16 flex">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-white">
              <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              </p>
              <p>the complete source files including HTML, CSS, and JavaScript as well as</p>
              <p>optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="text-white">
              <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              </p>
              <p>the complete source files including HTML, CSS, and JavaScript as well as</p>
              <p>optional SASS stylesheets for easy customization.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
