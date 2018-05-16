import React from "react";
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const layout = props => (
  <Aux>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Aux>
);

export default layout;
