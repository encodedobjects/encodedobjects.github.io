import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/navbar.js";

import "./style/index.scss";
import "typeface-inconsolata";

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
