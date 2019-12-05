import React, { Component, useState } from "react";
import { Chart, useChartConfig } from "react-charts";
import { withAuthorization } from "../Session";
import { Container } from "reactstrap";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {};

class RentalsPageBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    //  here lets do the render list for the things
    return (
      <Container>
        <br />
        <h2>Welcome Back !</h2>
        <br />
        <ButtonGroup style={{ width: "100%" }} size="lg">
          <Button>My Rentals</Button>
          <Button>Help Sections</Button>
          <Button tag="a" href={ROUTES.ACCT_SETTINGS}>
            Account Settings
          </Button>
        </ButtonGroup>
      </Container>
    );
  }
}

const RentalsPage = compose(withFirebase)(RentalsPageBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(RentalsPage);
