import React, { Component } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";
import styles from "./Table.css";
import axios from "../../axios-score";

class Table extends Component {
  state = {
    recentTopScoreUsers: null,
    allTimeTopScoreUsers: null,
    users: null
  };

  componentDidMount() {
    if (!this.state.recentTopScoreUsers) {
      axios.get("/recent").then(res => {
        this.setState({ recentTopScoreUsers: res.data });
        this.setState({ users: this.state.recentTopScoreUsers });
      });
    }
  }

  recentTopScoreHandler = () => {
    this.setState({ users: this.state.recentTopScoreUsers });
  };

  allTimeTopScoreHandler = () => {
    if (!this.state.allTimeTopScoreUsers) {
      axios.get("/alltime").then(res => {
        this.setState({ allTimeTopScoreUsers: res.data });
        this.setState({ users: res.data });
      });
    } else {
      this.setState({ users: this.state.allTimeTopScoreUsers });
    }
  };

  render() {
    let users = null;
    if (this.state.users) {
      users = this.state.users.map((usr, i) => (
        <tr key={`${usr.username}_${i + 1}`}>
          <td>{i + 1}</td>
          <td>
            <a href={`https://www.freecodecamp.org/${usr.username}`}>
              <img
                className={styles.Userimg}
                src={usr.img}
                alt={usr.username}
              />
              {usr.username}
            </a>
          </td>
          <td className={styles.CenterText}>{usr.recent}</td>
          <td className={styles.CenterText}>{usr.alltime}</td>
        </tr>
      ));
    }

    return (
      <table className={styles.Table}>
        <TableHeader
          recent={this.recentTopScoreHandler}
          alltime={this.allTimeTopScoreHandler}
        />
        <TableContent>{users}</TableContent>
      </table>
    );
  }
}

export default Table;
