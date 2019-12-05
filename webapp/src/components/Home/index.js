import React, { Component, useState } from "react";
import { Chart, useChartConfig } from "react-charts";
import { withAuthorization } from "../Session";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
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
import SpaceModal from "./spaceModal";
import AddButton from "./addModal";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  locations: [],
  docIDs: [],
  spaceList: []
};

class HomePageBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.state.locations = JSON.parse(localStorage.getItem("data")).locations;
    //this.refreshState();
  }

  refreshState() {
    let data = this.setState({ locations: data.locations });

    // var _this = this;
    // //  get the list of space references from the db
    // const locations = this.props.firebase.firestore.collection("locations");
    // let listOfLocations = [];
    // let listOfSpaces = [];
    // let listOfIDs = [];
    // locations.get().then(docs => {
    //   docs.forEach(element => {
    //     listOfLocations.push(element.data());
    //     listOfSpaces.push([]);
    //     for (let i in element.data().Spaces) {
    //       console.log("Identifier", element.id);
    //       console.log("Identifier2", element.data().Spaces[i]);
    //       var spaces = this.props.firebase.firestore.collection("locations");
    //       console.log("TUTORIAL", spaces.doc(element.id));
    //       // .doc(element.id)
    //       // .collection("Spaces")
    //       // .doc(element.data().Spaces[i]);
    //       spaces.get().then(dik => {
    //         console.log("TESSSST", spaces.doc("spaces/" + element.id).data());
    //       });
    //       listOfSpaces[i].push();
    //       //
    //     }
    //     listOfIDs.push(element.id);
    //   });

    //   //

    //   //
    //   this.setState({ locations: listOfLocations });
    //   this.setState({ docIDs: listOfIDs });
    // });
    // //Get each space by reference
    // let spaces = [];
    // const spacess = this.props.firebase.firestore.collection("Spaces");
    // spacess.get().then(doc => {
    //   doc.forEach(element => {
    //     spaces.push(element.data());
    //     this.setState({ spaceList: spaces });
    //   });
    // });
    // console.log("PRELIMENARY", spaces);

    // //   }
    // // }
    // console.log("RESULT", this.state.spaceList);
  }

  render() {
    //  here lets do the render list for the things

    const locations = [];
    console.log("RESULTER", this.state.spaceList);
    for (let i in this.state.locations) {
      let Spaces = [];
      for (let j in this.state.locations[i].Spaces) {
        let element = (
          <ListGroupItem
            className="justify-content-between"
            style={{ display: "flex" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>{this.state.locations[i].Spaces[j].Type}</h4>
              <p>Location: </p>
            </div>

            <SpaceModal
              label={this.state.locations[i].Spaces[j].Type}
              occupancy={this.state.locations[i].Spaces[j].Occupancy}
              price={this.state.locations[i].Spaces[j].Price}
              space={this.state.locations[i].Spaces[j]}
              id={this.state.docIDs[i]}
            ></SpaceModal>
          </ListGroupItem>
        );

        Spaces.push(element);
      }
      Spaces.push(<AddButton></AddButton>);
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

          <ListGroup>{Spaces}</ListGroup>
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
          <Button tag="a" href={ROUTES.MY_RENTALS}>
            My Rentals
          </Button>
          <Button>Help Sections</Button>
          <Button tag="a" href={ROUTES.ACCT_SETTINGS}>
            Account Settings
          </Button>
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
