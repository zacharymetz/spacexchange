import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import logoimage from "../../img/logo-dark.svg";
import { AuthUserContext } from "../Session";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" dark expand="md">
      <NavbarBrand href={ROUTES.LANDING} style={{ color: "black" }}>
        <img
          src={logoimage}
          width="30"
          height="30"
          alt=""
          style={{ marginRight: "0.5rem" }}
        />
        Spaceful
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href={ROUTES.HOME} style={{ color: "black" }}>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={ROUTES.SIGN_UP} style={{ color: "black" }}>
              About
            </NavLink>
          </NavItem>

          
          <NavItem>
            <SignOutButton />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const NavigationNonAuth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" dark expand="md">
        <NavbarBrand href={ROUTES.LANDING} style={{ color: "black" }}>
          <img
            src={logoimage}
            width="30"
            height="30"
            alt=""
            style={{ marginRight: "0.5rem" }}
          />
          Spaceful
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={ROUTES.SIGN_UP} style={{ color: "black" }}>
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href={ROUTES.SIGN_IN} style={{ color: "black" }}>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={ROUTES.SIGN_UP} style={{ color: "black" }}>
                Signup
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
