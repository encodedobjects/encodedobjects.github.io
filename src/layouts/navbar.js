import React from "react";
import Link from "gatsby-link";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobileMenuOpen: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    }));
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

          <div
            className="navbar-item mobile-menu-button is-hidden-desktop"
            onClick={this.toggleMobileMenu}
          >
            <span className="icon">
              <i
                className={`mdi ${isMobileMenuOpen ? "mdi-close" : "mdi-menu"}`}
              />
            </span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
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
              <span className="icon github-icon">
                <i className="mdi mdi-github-circle" />
              </span>
            </a>
          </div>
        </div>

        <div
          className={`navbar-menu mobile-menu is-hidden-desktop ${isMobileMenuOpen
            ? "is-active"
            : "is-hidden"}`}
        >
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
      </nav>
    );
  }
}
