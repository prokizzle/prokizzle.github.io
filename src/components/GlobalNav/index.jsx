import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { toggleMenu } from "../../actions/global.actions";

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

    const { isOpen, toggleMenuAction } = this.props;

    return (
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">nick.prokes.ch</NavbarBrand>
        <NavbarToggler onClick={toggleMenuAction} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navs.map((navItem, i) => {
              const navItemClass = classNames({ active: currentTab === navItem.url });
              return (
                <NavItem className={navItemClass} key={navItem.id}>
                  <NavLink href={navItem.url} target="_blank">
                    {navItem.label}
                  </NavLink>
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
  isOpen: PropTypes.bool,
  toggleMenuAction: PropTypes.func.isRequired,
};

GlobalNav.defaultProps = {
  location: {
    pathname: "",
  },
  isOpen: false,
};

const mapStateToProps = ({ menuOpened }) => ({ isOpen: menuOpened });

const mapDispatchToProps = dispatch => ({
  toggleMenuAction: () => dispatch(toggleMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalNav);
