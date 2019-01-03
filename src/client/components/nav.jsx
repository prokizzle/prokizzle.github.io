import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import 'bootstrap'
import '../styles/custom.scss';
import classNames from "classnames";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export class GlobalNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navs = [
      { label: "Email Me", url: "mailto:nick@prokes.ch" },
      {
        label: "Resume/CV",
        url: "https://s3.amazonaws.com/prokizzle-cv/Nick_Prokesch_visualcv_resume.pdf"
      },
      { label: "Schedule a Call", url: "https://calendly.com/prokizzle" }
    ];
    const currentTab = this.props.location.pathname.replace("/", "");
    return (
      <Navbar dark color="dark" expand="md">
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            {navs.map((x, i) => {
              const navItemClass = classNames({ active: currentTab === x.url });
              return (
                <Nav>
                  <NavLink to={x.url}>{x.label}</NavLink>
                </Nav>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

GlobalNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

GlobalNav.defaultProps = {
  location: {
    pathname: ""
  }
};
