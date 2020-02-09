import React from "react";
import Link from "gatsby-link";
import { VelocityTransitionGroup } from "velocity-react";

import MobileNavbar from "./mobile-navbar";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobileMenuOpen: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState(prevState => {
      const newState = !this.state.isMobileMenuOpen;
      document.body.classList.add("mobile-menu-open");
      newState
        ? document.body.classList.add("mobile-menu-open")
        : document.body.classList.remove("mobile-menu-open");
      return { isMobileMenuOpen: newState };
    });
  }

  render() {
    const { isMobileMenuOpen } = this.state;
    return (
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item navbar-logo" to="/">
            <span className="logo-bracket">{"{"}</span>
            <span className="logo-name">encodedobjects</span>
            <span className="logo-bracket">{"}"}</span>
          </Link>

          {!isMobileMenuOpen && (
            <div
              className="navbar-item is-hidden-desktop mobile-menu-button"
              onClick={this.toggleMobileMenu}
            >
              <span className="icon">
                <i className="mdi mdi-menu" />
              </span>
            </div>
          )}
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item" activeClassName="active">
              Work
            </Link>
            {/* <Link to="/posts" className="navbar-item" activeClassName="active">
              Posts
            </Link> */}
            <Link to="/cv" className="navbar-item" activeClassName="active">
              CV
            </Link>
            <Link to="/about" className="navbar-item" activeClassName="active">
              About
            </Link>
            <Link
              to="/contact"
              className="navbar-item"
              activeClassName="active"
            >
              Contact
            </Link>
            <a className="navbar-item" href="https://github.com/encodedobjects">
              <span className="icon github-icon">
                <i className="mdi mdi-github-circle" />
              </span>
            </a>
          </div>
        </div>

        <VelocityTransitionGroup
          enter={{ animation: { opacity: 1 }, duration: 200, easing: "easeIn" }}
          leave={{ animation: { opacity: 0 }, duration: 200, easing: "easeIn" }}
        >
          {isMobileMenuOpen && (
            <MobileNavbar closeMenu={this.toggleMobileMenu} />
          )}
        </VelocityTransitionGroup>
      </nav>
    );
  }
}
