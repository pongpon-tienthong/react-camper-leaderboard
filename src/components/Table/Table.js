import React, { Component } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";
import styles from "./Table.css";

class Table extends Component {
  render() {
    return (
      <table className={styles.Table}>
        <TableHeader />
        <TableContent />
      </table>
    );
  }
}

export default Table;
