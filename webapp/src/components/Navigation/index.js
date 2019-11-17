import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';


import { AuthUserContext } from '../Session';


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
  
const NavigationNonAuth = () => (

    <div class="nav-bar">
        
        <Link to={ROUTES.LANDING} class="nav-brand"></Link>
        <div class="nav-list">
        <Link to={ROUTES.SIGN_UP} class="nav-list-item">Sign Up</Link>
        <Link to={ROUTES.SIGN_IN} class="nav-list-item">Login</Link>
        
        </div>
    </div>
    
);

export default Navigation;