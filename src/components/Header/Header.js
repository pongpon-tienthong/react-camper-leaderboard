import React from "react";
import styles from "./Header.css";
import freeCodeCampLogo from "../../assets/images/freecodecamp.svg";

const header = () => (
  <header className={styles.Header}>
    <img src={freeCodeCampLogo} alt="freeCodeCampLogo" />
  </header>
);

export default header;
