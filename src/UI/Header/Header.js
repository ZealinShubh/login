import styles from "./Header.module.css";
import StatsIcon from "../../icons/StatsIcon";
import { useState } from "react";
import Alert from "../Alert/Alert";
import useBearStore from "../../state/state";

const Header = () => {
  const [showAlert, setShowAlert] = useState(false);
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const yes = () => {
    // setShowAlert(false);
    setIsUserValid(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <StatsIcon />
      </div>
      <div className={styles.headerItem}>
        <h1 className={styles.heading}>STATS</h1>
        <div className={styles.headerBtnDiv}>
          <button
            onClick={() => setShowAlert(true)}
            className={styles.logOutBtn}
          >
            logout
          </button>
        </div>
      </div>
      {showAlert && (
        <Alert
          message={"Are you sure? you wanna logout?"}
          yes={yes}
          setShowAlert={setShowAlert}
        />
      )}
    </header>
  );
};

export default Header;
