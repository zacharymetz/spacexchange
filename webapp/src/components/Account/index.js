import React, { Component } from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";

const INITIAL_STATE = {
  view: true
};

const MyAccount = () => (
  <div>
    <AccountPage />
  </div>
);

class AccountPageBase extends Component {
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
    console.log("YAAAAAAAAAA", this.state.view);
  };
  render() {
    if (this.state.view === true) {
      return (
        <div
          className="content"
          style={{ backgroundImage: "../img/background1.svg" }}
        >
          <Row style={{ margin: "2rem 0rem" }}>
            <Col>
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        // src={require("../../img/profile.png")}
                        style={{
                          height: "300px",
                          width: "300px",
                          display: "flex",
                          justifyContent: "center",
                          margin: "0 0 1rem 1rem"
                        }}
                      />
                      <h5
                        className="title"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        Sherlock Holmes
                      </h5>
                    </a>
                    <p
                      className="description"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      Ceo/Co-Founder
                    </p>
                  </div>
                  <div className="card-description">
                    Once you eliminate the impossible, whatever remains, no
                    matter how improbable, must be the truth.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Your Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label style={headerStyle}>Company</label>
                          <p>Tyrell Corp Inc</p>
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label
                            htmlFor="exampleInputEmail1"
                            style={headerStyle}
                          >
                            Email address
                          </label>
                          <p>evil@tyrell.com</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label style={headerStyle}>First Name</label>
                          <p>Sherlock</p>
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label style={headerStyle}>Last Name</label>
                          <p>Holmes</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label style={headerStyle}>Address</label>
                          <p>221B Baker St</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label style={headerStyle}>City</label>
                          <p>London</p>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label style={headerStyle}>Country</label>
                          <p>United Kingdom</p>
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label style={headerStyle}>Postal Code</label>
                          <p>123456</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label style={headerStyle}>About Me</label>
                          <p>
                            Consulting detective, socially inpet, looks taller
                            in pictures
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-fill"
                    color="primary"
                    type="submit"
                    onClick={this.onClick}
                  >
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div
          className="content"
          style={{ backgroundImage: "../img/background1.svg" }}
        >
          <Row style={{ margin: "2rem 0rem" }}>
            <Col>
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        // src={require("../../img/profile.png")}
                        style={{ height: "300px", width: "300px" }}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Your Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label style={headerStyle}>Company</label>
                          <p>Tyrell Corp Inc</p>
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label
                            htmlFor="exampleInputEmail1"
                            style={headerStyle}
                          >
                            Email address
                          </label>
                          <p>evil@tyrell.com</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label style={headerStyle}>First Name</label>
                          <Input
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label style={headerStyle}>Last Name</label>
                          <Input
                            defaultValue="Andrew"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Mike"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Andrew"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-fill"
                    color="primary"
                    type="submit"
                    onClick={this.onClick}
                  >
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

const headerStyle = {
  fontWeight: "bold",
  fontSize: "14pt"
};
export default MyAccount;

const condition = authUser => !!authUser;

const AccountPage = withAuthorization(condition)(AccountPageBase);
export { AccountPage };
