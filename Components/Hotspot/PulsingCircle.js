import { useState } from "react";
import styles from "./Hotspot.module.css";
const PulsingCircle = ({ onClick }) => {
  const [close, setClose] = useState(false);
  return (
    <div className={styles.circle_wrapper}>
      {" "}
      <div className={styles.pulsating_circle} onClick={onClick}></div>
    </div>
  );
};

export default PulsingCircle;
