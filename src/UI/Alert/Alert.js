import styles from "./Alert.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { useEffect, useState } from "react";

const Alert = (props) => {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    setOpacity("opacity-1");
  }, []);

  const no = () => {
    setOpacity("opacity-0");
    setTimeout(() => {
      props.setShowAlert(false);
    }, 300);
  };

  const yes = () => {
    setOpacity("opacity-0");
    setTimeout(() => {
      props.yes();
    }, 300);
  };

  return (
    <>
      <Backdrop className={opacity} onClick={no} />
      <div className={`${styles.mainDiv} ${opacity}`}>
        <div>{props.message}</div>
        <div className={styles.buttonsDiv}>
          <button onClick={yes}>yes</button>
          <button onClick={no}>no</button>
        </div>
      </div>
    </>
  );
};

export default Alert;
