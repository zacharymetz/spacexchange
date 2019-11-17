import React from 'react';

import { withFirebase } from '../Firebase';
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
  Button  } from 'reactstrap';
const SignOutButton = ({ firebase }) => (
  <NavLink href="#"   onClick={firebase.doSignOut}>
    Sign Out
  </NavLink>
);

export default withFirebase(SignOutButton);