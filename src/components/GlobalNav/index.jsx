import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class GlobalNav extends PureComponent {
  render() {
    const navs = [
      { id: 0, label: "Email Me", url: "mailto:nick@prokes.ch" },
      {
        id: 1,
        label: "Resume/CV",
        url: "https://s3.amazonaws.com/prokizzle-cv/Nick_Prokesch_visualcv_resume.pdf",
      },
      { id: 2, label: "Schedule a Call", url: "https://calendly.com/prokizzle" },
    ];
    const {
      location: { pathname },
    } = this.props;
    const currentTab = pathname.replace("/", "");
    return (
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">nick.prokes.ch</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            {navs.map((x, i) => {
              const navItemClass = classNames({ active: currentTab === x.url });
              return (
                <NavItem className={navItemClass} key={x.id}>
                  <NavLink to={x.url}>{x.label}</NavLink>
                </NavItem>
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
    pathname: PropTypes.string,
  }),
};

GlobalNav.defaultProps = {
  location: {
    pathname: "",
  },
};

export default GlobalNav;
