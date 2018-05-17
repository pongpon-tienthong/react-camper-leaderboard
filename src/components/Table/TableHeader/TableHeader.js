import React from "react";
import styles from "../Table.css";

const tableHeader = props => (
  <thead>
    <tr>
      <th>#</th>
      <th>Camper Name</th>
      <th className={styles.Sortable} onClick={props.recent}>
        Points in past 30 days
      </th>
      <th className={styles.Sortable} onClick={props.alltime}>
        All time points
      </th>
    </tr>
  </thead>
);

export default tableHeader;
