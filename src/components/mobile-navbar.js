import React from "react";
import Link from "gatsby-link";
import { VelocityTransitionGroup } from "velocity-react";

export default function MobileNabar({ closeMenu }) {
  return (
    <div className="mobile-overlay is-hidden-desktop" onClick={closeMenu}>
      <div className="icon mobile-menu-button" onClick={closeMenu}>
        <i className="mdi mdi-close" />
      </div>
      <div className="mobile-menu">
        <Link to="/" exact className="navbar-item" activeClassName="active">
          Work
        </Link>
        <Link to="/posts" className="navbar-item" activeClassName="active">
          Posts
        </Link>
        <Link to="/about" className="navbar-item" activeClassName="active">
          About
        </Link>
        <a className="navbar-item" href="https://github.com/encodedobjects">
          GitHub
        </a>
      </div>
    </div>
  );
}
