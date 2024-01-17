import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.backdrop} ${props.className}`}
    />
  );
};

export default Backdrop;
