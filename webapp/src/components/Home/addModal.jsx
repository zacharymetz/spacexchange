import React, { useState } from "react";
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

const ModalExample = props => {
  const { className } = props;

  const buttonLabel = props.dick;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} style={{ margin: "10px" }}>
        Add space
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add a space</ModalHeader>
        <ModalBody style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <img
              src={require("../../img/Upload.png")}
              style={{ width: "200px", height: "200px", margin: "5px" }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button>Upload</Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <Input placeholder="Space Type" type="text"></Input>
            </CardHeader>
            <div style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span style={{ fontWeight: "bold" }}>Price:</span>
                <Input
                  placeholder="$"
                  type="text"
                  style={{ maxWidth: "4rem" }}
                ></Input>
                <span style={{ margin: "1rem" }}>to</span>
                <Input
                  placeholder="$"
                  type="text"
                  style={{ maxWidth: "4rem" }}
                ></Input>
              </div>
            </div>
            <br />
            <div style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: "bold" }}>Occupancy:</span>{" "}
                <Input
                  type="text"
                  style={{ maxWidth: "4rem", margin: "5px" }}
                ></Input>
              </div>
            </div>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Finish
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

export default ModalExample;
