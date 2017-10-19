import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "./navbar";

import "../fonts/aleo.css";
import "./index.scss";

const Template = ({ children }) => (
  <div>
    <Helmet title="Encoded Objects" />
    <Navbar />
    <main>{children()}</main>
  </div>
);

Template.propTypes = {
  children: PropTypes.func
};

export default Template;
