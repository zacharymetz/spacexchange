import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  ListGroup,
  Input
} from "reactstrap";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { AuthUserContext, withAuthorization } from "../Session";

const INITIAL_STATE = {
  price: null,
  occupancy: null,
  view: true,
  id: null
};

const SpaceInfo = props => (
  <div>
    <EditSpace price={props.price} occupancy={props.price} id={props.id} />
  </div>
);

class EditSpace extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onClick = event => {
    if (this.state.view === true) {
      this.setState({ view: false });
    } else {
      this.setState({ view: true });
    }
    this.render();
  };
  onSave = event => {
    const price = this.price;
    const arrayToUpdate = this.props.firebase.firestore.FieldValue;
    console.log("SSSSSSSSSSSS", price);
    const db = this.props.firebase.firestore;
    const ref = db
      .collection("locations")
      .doc(this.props.id)
      .update({
        Spaces: [16, 17]
      });
    if (this.state.view === true) {
      this.setState({ view: false });
    } else {
      this.setState({ view: true });
    }
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { price, occupancy } = this.state;
    console.log("RENDER", this.props);
    if (this.state.view === true) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between"
          }}
        >
          <Card style={{ margin: "10px 0px" }}>
            <CardHeader>
              <h5 className="title">Space details</h5>
            </CardHeader>
            <div>
              <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
              {this.props.price}
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>Occupancy:</span>{" "}
              {this.props.occupancy}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
            </div>
          </Card>
          <Button onClick={this.onClick}>Edit</Button>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Card>
            <CardHeader>
              <h5 className="title">Space details</h5>
            </CardHeader>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "5px 0px"
              }}
            >
              <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
              <Input
                value={price}
                onChange={this.onChange}
                style={{ maxWidth: "4rem" }}
              ></Input>
              <br />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "5px 0px"
              }}
            >
              <span style={{ fontWeight: "bold" }}>Occupancy:</span>{" "}
              <Input style={{ maxWidth: "4rem" }}></Input>
              <br />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "5px 0px"
              }}
            >
              <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
              <Input style={{ maxWidth: "4rem" }}></Input>
              <br />
            </div>
          </Card>
          <Button onClick={this.onSave}>Save</Button>
        </div>
      );
    }
  }
}

export default SpaceInfo;

const condition = authUser => !!authUser;

const SpaceView = compose(withFirebase)(EditSpace);
export { SpaceView };
