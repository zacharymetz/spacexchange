import React, { Component, useState } from "react";
import { Chart, useChartConfig } from "react-charts";
import { withAuthorization } from "../Session";
import { Container } from "reactstrap";
import { Button, ButtonGroup, Card, CardHeader, Input } from "reactstrap";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const INITIAL_STATE = {
  cvc: "",
  expiry: "",
  focus: "",
  name: "",
  number: "",
  edit: false
};

class SettingsBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onClick = event => {
    if (this.state.edit === true) {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
    this.render();
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    if (this.state.edit === true) {
      return (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            <h2>Account Settings</h2>
            <ButtonGroup style={{ width: "100%" }} size="lg">
              <Button tag="a" href={ROUTES.MY_RENTALS}>
                My Rentals
              </Button>
              <Button>Help Sections</Button>
              <Button>Account Settings</Button>
            </ButtonGroup>
          </div>
          <Card style={{ margin: "5rem", display: "flex" }}>
            <CardHeader style={{ fontSize: "20pt" }}>
              Banking Information
            </CardHeader>
            <h5>Bank Account Details</h5>
            <div style={{ display: "flex" }}>
              <Input
                style={{ maxWidth: "15rem", margin: "0 1rem" }}
                placeholder="Account Number"
              ></Input>
              <Input
                style={{ maxWidth: "15rem" }}
                placeholder="Routing number"
              ></Input>
            </div>

            <div id="PaymentForm" style={{ margin: "1rem 0" }}>
              <h5>Card information</h5>
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
              <form
                style={{
                  margin: "0 0.5rem",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Input
                  type="tel"
                  name="name"
                  placeholder="Sherlock Holmes"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{ maxWidth: "10rem", margin: "0.5rem 0.2rem" }}
                />
                <Input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{ maxWidth: "20rem", margin: "0.25rem 0.1rem" }}
                />
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <Input
                    type="tel"
                    name="expiry"
                    placeholder="MM/YY"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    style={{ maxWidth: "5rem", margin: "0.5rem 0.2rem" }}
                  />
                  <Input
                    type="tel"
                    name="cvc"
                    placeholder="123"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    style={{ maxWidth: "5rem", margin: "0.5rem 0.2rem" }}
                  />
                </span>
              </form>
            </div>
            <Button onClick={this.onClick}>Save</Button>
          </Card>
        </Container>
      );
    } else {
      return (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            <h2>Account Settings</h2>
            <ButtonGroup style={{ width: "100%" }} size="lg">
              <Button tag="a" href={ROUTES.MY_RENTALS}>
                My Rentals
              </Button>
              <Button>Account Settings</Button>
            </ButtonGroup>
          </div>
          <Card style={{ margin: "5rem", display: "flex" }}>
            <CardHeader style={{ fontSize: "20pt" }}>
              Banking Information
            </CardHeader>
            <h5>Bank Account Details</h5>
            <div style={{ display: "flex" }}>
              <Input
                disabled
                style={{ maxWidth: "15rem", margin: "0 1rem" }}
                placeholder="Account Number"
              ></Input>
              <Input
                disabled
                style={{ maxWidth: "15rem" }}
                placeholder="Routing number"
              ></Input>
            </div>

            <div id="PaymentForm" style={{ margin: "1rem 0" }}>
              <h5>Card information</h5>
              <Cards
                cvc={this.state.cvc}
                expiry={"08/21"}
                focused={this.state.focus}
                name={"Sherlock Holmes"}
                number={5542849202849230}
              />
              <form
                style={{
                  margin: "0 0.5rem",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Input
                  disabled
                  type="tel"
                  name="name"
                  placeholder="Sherlock Holmes"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{ maxWidth: "10rem", margin: "0.5rem 0.2rem" }}
                />

                <Input
                  disabled
                  type="tel"
                  name="number"
                  placeholder="5542849202849230"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{ maxWidth: "20rem", margin: "0.25rem 0.15rem" }}
                />
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <Input
                    disabled
                    type="tel"
                    name="expiry"
                    placeholder="08/21"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    style={{ maxWidth: "5rem", margin: "0.5rem 0.2rem" }}
                  />
                  <Input
                    disabled
                    type="tel"
                    name="cvc"
                    placeholder="123"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    style={{ maxWidth: "5rem", margin: "0.5rem 0.2rem" }}
                  />
                </span>
              </form>
            </div>
            <Button onClick={this.onClick}>Edit</Button>
          </Card>
        </Container>
      );
    }
  }
}

const SettingsPage = compose(withFirebase)(SettingsBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(SettingsPage);
