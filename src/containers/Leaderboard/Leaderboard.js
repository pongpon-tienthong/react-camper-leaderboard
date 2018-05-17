import React from "react";
import styles from "./Leaderboard.css";
import Table from "../../components/Table/Table";

const leaderboard = () => (
  <div className={styles.Leaderboard}>
    <h2>Leaderboard</h2>
    <Table />
  </div>
);

export default leaderboard;
