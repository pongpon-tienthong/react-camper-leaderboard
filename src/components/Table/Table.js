import React, { Component } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";
import styles from "./Table.css";
import axios from "../../axios-score";

class Table extends Component {
  state = {
    allTimeTop: null,
    recentTop: null
  };

  componentDidMount() {
    axios.get("/recent").then(res => {
      this.setState({ recentTop: res.data });
    });
  }

  render() {
    
    let recentTop = null;
    if (this.state.recentTop) {
      recentTop = this.state.recentTop.map((usr, i) => (
        <tr key={`${usr.username}_${i + 1}`}>
          <td>{i + 1}</td>
          <td>{usr.username}</td>
          <td className={styles.CenterText}>{usr.recent}</td>
          <td className={styles.CenterText}>{usr.alltime}</td>
        </tr>
      ));
    }

    return (
      <table className={styles.Table}>
        <TableHeader />
        <TableContent>{recentTop}</TableContent>
      </table>
    );
  }
}

export default Table;
