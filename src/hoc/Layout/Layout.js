import React from "react";
import Aux from "../Aux/Aux";

const layout = props => (
  <Aux>
    <div>Header</div>
    <main>{props.children}</main>
    <div>Footer</div>
  </Aux>
);

export default layout;
