import React from "react";
import styles from "../Table.css";

const tableHeader = props => {
  const recentTopScoreClassName = [styles.Sortable];
  const allTimeTopScoreClassName = [styles.Sortable];

  switch (props.selected) {
    case "allTime":
      allTimeTopScoreClassName.push(styles.Selected);
      break;
    case "recent":
    default:
      recentTopScoreClassName.push(styles.Selected);
      break;
  }

  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Camper Name</th>
        <th
          className={recentTopScoreClassName.join(" ")}
          onClick={props.recent}
        >
          Points in past 30 days
        </th>
        <th
          className={allTimeTopScoreClassName.join(" ")}
          onClick={props.alltime}
        >
          All time points
        </th>
      </tr>
    </thead>
  );
};

export default tableHeader;
