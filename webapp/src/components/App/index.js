import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//  all of the standard pages
import Navigation from "../Navigation";
import Footer from "../Footer";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

//  all of the about pages
import NewRenterProfile from "../Rent/registerProfile";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <Navigation />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route exact path={ROUTES.HOME} component={HomePage} />
    <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route exact path={ROUTES.ADMIN} component={AdminPage} />

    <Route
      exact
      path={ROUTES.ACCOUNT + "/newrenterprofile"}
      component={NewRenterProfile}
    />

    <Footer />
  </Router>
);

export default withAuthentication(App);
