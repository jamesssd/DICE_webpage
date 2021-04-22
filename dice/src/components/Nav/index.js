import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
        <nav>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "../pages/crosswalk" ? "nav-link active" : "nav-link"}
                to="/crosswalk"
              >
                Department Crosswalk
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "../pages/bca_page" ? "nav-link active" : "nav-link"}
                to="/bca_page"
              >
                BCA PC Viewer
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      
    );
  }
}

export default Nav;