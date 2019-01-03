import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class GlobalNav extends PureComponent {
  render() {
    const navs = [
      { label: "Email Me", url: "mailto:nick@prokes.ch" },
      {
        label: "Resume/CV",
        url: "https://s3.amazonaws.com/prokizzle-cv/Nick_Prokesch_visualcv_resume.pdf"
      },
      { label: "Schedule a Call", url: "https://calendly.com/prokizzle" }
    ];
    const { location: { pathname } } = this.props;
    const currentTab = pathname.replace("/", "");
    return (
      <Navbar dark color="dark" expand="md">
        <Collapse isOpen={1 == 1} navbar>
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

export default GlobalNav;
