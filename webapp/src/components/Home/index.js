import React, { Component } from "react";
import { Chart, useChartConfig } from "react-charts";
import { withAuthorization } from "../Session";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { Button, ButtonGroup } from "reactstrap";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";
const INITIAL_STATE = {
  locations: []
};

class HomePageBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.refreshState();
  }

  refreshState() {
    var _this = this;
    //  get the list of locations from the db
    const locations = this.props.firebase.firestore.collection("locations");
    let listOfLocations = [];
    locations.get().then(docs => {
      docs.forEach(element => {
        listOfLocations.push(element.data());
      });
      console.log(listOfLocations);
      this.setState({ locations: listOfLocations });
      console.log(this.state);
    });
  }

  render() {
    //  here lets do the render list for the things

    const locations = [];

    for (let i in this.state.locations) {
      let spaces = [];
      for (let j in this.state.locations[i].spaces) {
        let element = (
          <ListGroupItem
            tag="button"
            action
            className="justify-content-between"
          >
            {this.state.locations[i].spaces[j].Type}{" "}
            <Badge pill>{this.state.locations[i].spaces[j].Price}</Badge>
          </ListGroupItem>
        );

        spaces.push(element);
      }
      let element = (
        <ListGroupItem
          style={{ background: "rgba(0,0,0,.125)" }}
          className={"justify-content-between"}
        >
          <div style={{ display: "flex", marginBottom: "0.5rem" }}>
            <h5 style={{ flexGrow: 1 }}>{this.state.locations[i].Name}</h5>{" "}
            <Button size="sm" color="primary">
              edit
            </Button>{" "}
          </div>
          <ListGroup>{spaces}</ListGroup>
        </ListGroupItem>
      );
      locations.push(element);
    }

    return (
      <Container>
        <br />
        <h2>Welcome Back !</h2>
        <br />
        <ButtonGroup style={{ width: "100%" }} size="lg">
          <Button>My Rentals</Button>
          <Button>Metrics</Button>
          <Button>Help Sections</Button>
          <Button tag="a" href={ROUTES.ACCOUNT}>Account</Button>
        </ButtonGroup>

        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              border: "1px solid black",
              height: "16rem",
              width: "20rem",
              margin: "0 1rem"
            }}
          ></div>

          <div
            style={{
              border: "1px solid black",
              height: "16rem",
              width: "20rem",
              margin: "0 1rem"
            }}
          ></div>
        </div>
        <br />
        <div>
          <h4 styles={{ fontColor: "white" }}>My Locations</h4>
          <ListGroup>{locations}</ListGroup>
        </div>
      </Container>
    );
  }
}

const HomePage = compose(withFirebase)(HomePageBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
