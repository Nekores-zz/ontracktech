//jshint esversion:6
import React, { Component } from "react";
import "../../styles/components/navbar.css";
import logo from "../../assets/images/logo.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      data: ["home", "application", "blog"]
    };
  }

  render() {
    return (
      <header className="navbar_app">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <div className="">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" className="img-fluid" />
              </a>
            </div>
            <div className="">
              <div className="">
                <div className="navbar-nav">
                  {this.state.data.map((item, index) => (
                    <a className="nav-item nav-link active hidden-xs" key={index} href="/">
                      {item} <span className="sr-only">(current)</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
