import React from 'react';
import { Chart, useChartConfig  } from 'react-charts'
import { withAuthorization } from '../Session';
import { Container } from 'reactstrap';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

const HomePage = () => (
  <Container>
    <br />
    <h2>Welcome Back !</h2>
    <br />
    <ButtonGroup style={{width:"100%"}} size="lg">
      <Button>My Rentals</Button>
      <Button>Metrics</Button>
      <Button>Help Sections</Button>
      <Button>Account Settings</Button>
    </ButtonGroup>
    
    <div style={{
      display : "flex",
      marginTop : "2rem",
      justifyContent : "center",


    }}>
      <div style={{
        border: "1px solid black",
        height:"16rem",
        width:"20rem",
        margin: "0 1rem"
      }}></div>

<div style={{
        border: "1px solid black",
        height:"16rem",
        width:"20rem",
        margin: "0 1rem"
      }}></div>
    
      
    </div>
    <br/>
    <div>
      <h4 styles={{fontColor:"white"}}>My Locations</h4>
    <ListGroup>
      <ListGroupItem style={{
        background:"rgba(0,0,0,.125)"
      }} className="justify-content-between">
        <div style={{display:"flex",marginBottom:"0.5rem"}}><h5 style={{flexGrow:1}}>4 Street Tower</h5>  <Button size="sm" color="primary">edit</Button>{' '}</div> 
        <ListGroup>
          <ListGroupItem tag="button" action className="justify-content-between">Private Office <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem tag="button" action className="justify-content-between">Cubicals <Badge pill>2</Badge></ListGroupItem>
        </ListGroup>

      </ListGroupItem>
      <ListGroupItem style={{
        background:"rgba(0,0,0,.125)"
      }} className="justify-content-between">
        <div style={{display:"flex",marginBottom:"0.5rem"}}><h5 style={{flexGrow:1}}>Cauliflour Tower</h5> <Button size="sm" color="primary">edit</Button>{' '}</div> 
        <ListGroup>
          <ListGroupItem tag="button" action className="justify-content-between">Private Office <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem tag="button" action className="justify-content-between">Cubicals <Badge pill>2</Badge></ListGroupItem>
        </ListGroup>

      </ListGroupItem>
      <ListGroupItem style={{
        background:"rgba(0,0,0,.125)"
      }} className="justify-content-between">
        <div style={{display:"flex",marginBottom:"0.5rem"}}><h5 style={{flexGrow:1}}>Industrial Offices</h5> <Button size="sm" color="primary">edit</Button>{' '}</div> 
        <ListGroup>
          <ListGroupItem tag="button" action className="justify-content-between">Private Office <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem tag="button" action className="justify-content-between">Cubicals <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem tag="button" action className="justify-content-between">Work Shops <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem tag="button" action className="justify-content-between">Large Work Rooms <Badge pill>2</Badge></ListGroupItem>
        </ListGroup>

      </ListGroupItem>
    </ListGroup>
    </div>
    
  </Container>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);

