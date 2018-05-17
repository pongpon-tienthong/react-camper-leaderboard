import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Leaderboard from "./containers/Leaderboard/Leaderboard";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Leaderboard />
        </Layout>
      </div>
    );
  }
}

export default App;
