import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  ListGroup
} from "reactstrap";
import { withFirebase } from "../Firebase";
import { SpaceView } from "./editSpace";
import { compose } from "recompose";

const RentalModalBase = props => {
  const { className } = props;

  const buttonLabel = props.dick;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const price = props.price;
  return (
    <div>
      <Button onClick={toggle}>
        View
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.label}</ModalHeader>
        <ModalBody style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img
            src={require("../../img/cubicle.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
          <SpaceView
            price={props.price}
            occupancy={props.occupancy}
            id={props.id}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const cardStyle = {
  margin: "0.25rem 0.25rem"
};

const RentalModal = compose(withFirebase)(RentalModalBase);

export default RentalModal;
