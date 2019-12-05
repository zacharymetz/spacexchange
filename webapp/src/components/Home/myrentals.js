import React, { Component, useState } from "react";
import { Chart, useChartConfig } from "react-charts";
import { withAuthorization } from "../Session";
import { Container } from "reactstrap";
import { Button, ButtonGroup, Card, CardHeader, CardBody } from "reactstrap";
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
        <h2>Past Rentals</h2>
        <br />
        <ButtonGroup style={{ width: "100%" }} size="lg">
          <Button>My Rentals</Button>
          <Button tag="a" href={ROUTES.ACCT_SETTINGS}>
            Account Settings
          </Button>
        </ButtonGroup>
        <div
          style={{
            maxWidth: "15rem",
            margin: "1rem 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Card style={{ margin: "1rem 0" }}>
            <CardHeader style={{ fontWeight: "bold" }}>
              Tyrell Corp - 12/10/2019
            </CardHeader>
            <CardBody>
              Rented by: James Moriarty <br />
              Space: Cubicle #3
              <br /> Total: $22 <br />
              Rating: 4/5
            </CardBody>
          </Card>
          <Card style={{ margin: "1rem 0" }}>
            <CardHeader style={{ fontWeight: "bold" }}>
              RBC Tower - 21/11/19
            </CardHeader>
            <CardBody>
              Rented by: John Watson <br />
              Space: Private Office #1
              <br /> Total: $43 <br />
              Rating: 4.5/5
            </CardBody>
          </Card>
          <Card style={{ margin: "1rem 0" }}>
            <CardHeader style={{ fontWeight: "bold" }}>
              RBC Tower - 24/11/19
            </CardHeader>
            <CardBody>
              Rented by: James Moriarty <br />
              Space: Boardroom #2
              <br /> Total: $37 <br />
              Rating: 4/5
            </CardBody>
          </Card>
        </div>
      </Container>
    );
  }
}

const RentalsPage = compose(withFirebase)(RentalsPageBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(RentalsPage);
