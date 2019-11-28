import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <div class="account-header">
          <div class="query-window" style={{ margin: "3rem" }}>
            <div class="header-message">
              <h1>Start Listing Extra Space Now</h1>
              <div class="button green">Become a Renter</div>
            </div>
          </div>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
