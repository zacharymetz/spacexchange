import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AuthUserContext, withAuthorization } from "../Session";
import { read } from "fs";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import buildingIcon from "./icons/building.svg";
import contractIcon from "./icons/contract.svg";
class NewRenterProfile extends Component {
  render() {
    const profileTypes = [
      {
        image: buildingIcon,
        text: "Building Owner",
        data: "owner"
      },
      {
        image: contractIcon,
        text: "Leasee",
        data: "lease"
      }
    ];
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Container>
            <div class="account-header"></div>
            <div class="container">
              <div class="new-profile-wrapper">
                <h1>Your Renter Profile</h1>
                <p>
                  Before you can start renting out space we need to know a
                  little bit more about your organization{" "}
                </p>
                <FormGroup
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "100%"
                  }}
                >
                  <div
                    style={{
                      flexGrow: 1,
                      margin: "1rem 2rem",
                      //border: "1px solid red",
                      width: "10rem",
                      flexShrink: "1"
                    }}
                  >
                    <Card>
                      <CardImg
                        style={{ width: "10rem" }}
                        src={contractIcon}
                        alt="Upload logo"
                      />
                      <CardBody>
                        <CardTitle>Profile photo</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>
                          Upload an image of your company logo
                        </CardText>
                        <Button>Upload Image</Button>
                      </CardBody>
                    </Card>
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      margin: "1rem 2rem",
                      //border: "1px solid red",
                      flexBasis: "content"
                    }}
                  >
                    <Label for="Company about" style={{ margin: "1rem 0rem" }}>
                      About your Company
                    </Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="Tell us about your organisation"
                      style={{ width: "30rem" }}
                    />
                  </div>
                </FormGroup>
              </div>
            </div>
          </Container>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    var selectItem = this.selectItem.bind(this);
  }

  //  this function will be called by the child elements
  //  and will make it so every child element is
  //  unselected until
  selectItem(target) {
    //  we removed the selected style from
    //  all the sub nodes
    const node = ReactDOM.findDOMNode(this).getElementsByClassName(
      "div-select-item"
    );
    for (var i = 0; i < node.length; i++) {
      node[i].classList.remove("selected");
    }
    //  now we need to set the element that
    //  triggered us to the same as above
    ReactDOM.findDOMNode(target).classList.add("selected");
    this.state.data = target.props.data;
    this.state.selected = true;
    console.log(this.state);
  }
  render() {
    //  make a list of elements first
    const items = [];

    for (const index in this.props.choices) {
      var selectItem = this.selectItem;
      items.push(
        <SelectorItem
          selectHandle={selectItem.bind(this)}
          data={this.props.choices[index]["data"]}
          image={this.props.choices[index]["image"]}
          text={this.props.choices[index]["text"]}
        />
      );
    }
    this.items = items;
    return <div class="div-select">{items}</div>;
  }
}

class SelectorItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    //  pretty much we want to find the parrent
    //  element and remove the style from all
    //  of its childern
    console.log(e);
  }

  render() {
    console.log(this.props);
    var selectItem = this.props.selectHandle;

    return (
      <div onClick={() => selectItem(this)} class="div-select-item">
        <div
          class="div-select-icon "
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        ></div>
        <div class="div-select-text">{this.props.text}</div>
      </div>
    );
  }
}

export default NewRenterProfile;
