import home_photo from "../assets/avataaars.png";
import styles from "./Home.module.css";
import { FaStar } from "react-icons/fa";
import Title from "../Components/Title";
export default function Home() {
  return (
    <>
      <Title title="Home" />
      <div className={`${styles.back} align-middle py-32`}>
        <div className="flex justify-center">
          <img src={home_photo} className="w-1/6" alt="" />
        </div>
        <div className={styles.headingcontainer}>
          <h2 className="text-white text-5xl font-bold pt-5">
            START FRAMEWORK
          </h2>
          <div className={styles.line}>
            <FaStar className={styles.star} />
          </div>
          <p className="text-center text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
