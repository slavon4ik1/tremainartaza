import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./header.scss";

export default class Header extends Component {
  onMenu = () => {
    let element = document.getElementById("animated");
    let menu = document.getElementById("menu");
    element.classList.toggle("open");
    menu.classList.toggle("opne");
  };
  componentDidMount() {
    window.addEventListener("scroll", function() {
      let menu = document.getElementById("fix-menu");
      let header = document.getElementById("header");
      let position = ReactDOM.findDOMNode(header).getBoundingClientRect();

      if (position.y >= -10) {
        menu.classList.add("close");
      }
      if (position.y === 0) {
        menu.classList.remove("close");
        menu.classList.add("slide");
      }
      if (position.y != 0) {
        menu.classList.add("close");
      }
    });
  }

  render() {
    return (
      <header className="header" id="header">
        <div className="header__fixed-link" id="fix-menu">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="header__fixed-link--wrap">
                  <a href="mailto:info@tremainartaza.com">
                    <span>Email</span>
                  </a>
                  <a href="tel:(469) 573-0229">
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__overlay"></div>
        <nav id="nav" className="header__nav">
          <div className="header__logo">
            <a href="#header">
              <img src="logo.png" alt="logo" />
            </a>
          </div>
          <button
            onClick={() => {
              this.onMenu();
            }}
            className="first-button header__btn"
            type="button"
          >
            <div id="animated" className="animated-icon1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <ul id="menu" className="header__nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="abouts">
              <a href="#">About</a>
              <ul className="header__nav-list--hide" id="dw">
                <li>
                  <a href="#">REVIEWS</a>
                </li>
                <li>
                  <a href="#">WHAT MAKES US DIFFERENTS</a>
                </li>
                <li>
                  <a href="#">ASHLEY TREMAIN</a>
                </li>
                <li>
                  <a href="#">CARMEN ARTAZA</a>
                </li>
                <li>
                  <a href="#">CHRISTINE HOPKIN</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li className="practice">
              <a href="#">Practice Areas</a>
              <ul className="header__nav-list--hide2">
                <li>
                  <a href="#">SEXUAL HARASSMENT</a>
                </li>
                <li>
                  <a href="#">FAMILY/MEDICAL LEAVE</a>
                </li>
                <li>
                  <a href="#">EQUAL PAY</a>
                </li>
                <li>
                  <a href="#">PREGNANCY & NURSING</a>
                </li>
                <li>
                  <a href="#">SEVERANCE & SEPARATION</a>
                </li>
                <li>
                  <a href="#">CONTRACT REVIEW AND NEGOTIATION</a>
                </li>
                <li>
                  <a href="#">UNEMPLOYMENT BENEFITS</a>
                </li>
                <li>
                  <a href="#">DEFAMATION</a>
                </li>
                <li>
                  <a href="#">NON-COMPETE</a>
                </li>
                <li>
                  <a href="#">WRONGFUL TERMINATION</a>
                </li>
                <li>
                  <a href="#">DISCRIMINATION</a>
                </li>
                <li>
                  <a href="#">RETALIATION</a>
                </li>
                <li>
                  <a href="#">WAGE & HOUR</a>
                </li>
                <li>
                  <a href="#">DISABILITY BENEFITS</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Consultation</a>
            </li>
            <li>
              <a href="#">Submit</a>
            </li>
            <li>
              <a className="link-border" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <div className="header__title">HONEST</div>
                <i>treatment</i>
                <div className="header__title">CLEAR</div>
                <i>advice</i>
                <div className="header__title">SMART</div>
                <i>strategies</i>
                <div className="header__content--link">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
