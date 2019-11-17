import React , { useState } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import logoimage from '../../img/fav.png'
import { AuthUserContext } from '../Session';
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
    DropdownItem } from 'reactstrap';

const Navigation = () => (
    
        <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
        </AuthUserContext.Consumer>
    
);
  
const NavigationAuth = () => (

    
    
    <div class="nav-bar">
            
        <Link to={ROUTES.LANDING} class="nav-brand"></Link>
        <div class="nav-list">
        
        <Link to={ROUTES.ACCOUNT} class="nav-list-item">Account</Link>
        <SignOutButton />
        </div>
    </div>
);
  
const NavigationNonAuth = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
    
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href={ROUTES.LANDING}>
        <img src={logoimage} width="30" height="30" alt="" /> Spaceful</NavbarBrand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={ROUTES.SIGN_UP}>Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={ROUTES.SIGN_IN}>Login</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
        
        
        
        
        </Navbar>
    </div>
    
)};

export default Navigation;