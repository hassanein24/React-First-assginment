import React from "react";
import styles from "./Port.module.css";
import sora from "../assets/poert1.png";
import sora2 from "../assets/port2.png";
import sora3 from "../assets/port3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import Title from "../Components/Title";
export default function Port() {
  return (
    <>
      <Title title="Port" />
      <div className="container pt-40 pl-20 pb-10">
        <div className={styles.headingcontainer}>
          <h2 className=" text-5xl font-bold">PORTFOLIO COMPONENT</h2>
          <div className={styles.line}>
            <FaStar className={styles.star} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className={styles.layer}>
            <div className={styles.image}>
              <img src={sora} className="rounded-md" alt="Port Image" />
              <div className={styles.content}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.layer}>
            <div className={styles.image}>
              <img src={sora2} className="rounded-md" alt="Port Image" />
              <div className={styles.content}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.layer}>
            <div className={styles.image}>
              <img src={sora3} className="rounded-md" alt="Port Image" />
              <div className={styles.content}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.layer}>
            <div className={styles.image}>
              <img src={sora} className="rounded-md" alt="Port Image" />
              <div className={styles.content}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.layer}>
            <div className={styles.image}>
              <img src={sora2} className="rounded-md" alt="Port Image" />
              <div className={styles.content}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.layer}>
            <div className={styles.image}>
              <img src={sora3} className="rounded-md" alt="Port Image" />
              <div className={styles.content}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
