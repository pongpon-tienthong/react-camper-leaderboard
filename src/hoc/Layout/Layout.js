import React from "react";
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Layout.css";

const layout = props => (
  <Aux>
    <Header />
    <main className={styles.Content}>{props.children}</main>
    <Footer />
  </Aux>
);

export default layout;
