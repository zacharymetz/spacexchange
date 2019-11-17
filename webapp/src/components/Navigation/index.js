import React , { useState } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import logoimage from '../../img/logo-white.svg'
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
    DropdownItem,
    Button  } from 'reactstrap';

const Navigation = () => (
    
        <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
        </AuthUserContext.Consumer>
    
);
  
const NavigationAuth = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (

    
    <Navbar  color="dark" dark expand="md">
      <NavbarBrand href={ROUTES.LANDING}>
        <img src={logoimage} width="30" height="30" alt="" style={{marginRight:"0.5rem"}} />Spaceful</NavbarBrand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              
              <NavLink href={ROUTES.SIGN_UP}>About</NavLink>
            </NavItem>
            
         
            <NavItem>
              <NavLink href={ROUTES.ACCOUNT}>My Account</NavLink>
            </NavItem>
            <NavItem>
            <SignOutButton />
            </NavItem>
            
          </Nav>
        </Collapse>
        
        
        
        
        </Navbar>

)};
  
const NavigationNonAuth = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
    
    <div>
      <Navbar color="dark" dark expand="md">
      <NavbarBrand href={ROUTES.LANDING}>
        <img src={logoimage} width="30" height="30" alt="" style={{marginRight:"0.5rem"}} />Spaceful</NavbarBrand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              
              <NavLink href={ROUTES.SIGN_UP}>About</NavLink>
            </NavItem>
            
            <NavItem>
                
              <NavLink href={ROUTES.SIGN_IN}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={ROUTES.SIGN_UP}>Signup</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
        
        
        
        
        </Navbar>
    </div>
    
)};

export default Navigation;