import React from "react";
import Aux from "../Aux/Aux";
import Header from '../../components/Header/Header';

const layout = props => (
  <Aux>
    <Header />
    <main>{props.children}</main>
    <div>Footer</div>
  </Aux>
);

export default layout;
