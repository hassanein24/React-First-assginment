import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={`${styles.back1} container mx-auto p-28 `}>
          <div className={`${styles.footer} grid grid-cols-3`}>
            <div>
              <h3 className="text-white text-center text-2xl font-bold my-2">
                LOCATION
              </h3>
              <p className="text-white text-center my-2">
                2215 John Daniel Drive
              </p>
              <p className="text-white text-center">Clark, MO 65243</p>
            </div>

            <div>
              <h3 className="text-white text-center text-2xl font-bold">
                AROUND THE WEB
              </h3>
              <div className="links flex justify-center">
                <div className="flex justify-center items-center rounded-full border-2 border-white w-9 h-9 my-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-white text-1xl"
                  />
                </div>
                <div className="flex justify-center items-center rounded-full border-2 border-white w-9 h-9 my-2 mx-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-white text-1xl"
                  />
                </div>
                <div className="flex justify-center items-center rounded-full border-2 border-white w-9 h-9 my-2 mx-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-1xl"
                  />
                </div>
                <div className="flex justify-center items-center rounded-full border-2 border-white w-9 h-9 my-2 mx-2">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-white text-1xl"
                  />
                </div>
              </div>
            </div>

            <div className="text-white">
              <h3 className="flex justify-center text-2xl font-bold my-2">
                ABOUT FREELANCER
              </h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
              </p>
              <p className="flex justify-center">Route</p>
            </div>
          </div>
        </div>

        <div className={`${styles.back2} text-white text-center py-6`}>
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
