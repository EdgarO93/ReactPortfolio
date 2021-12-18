import React from 'react';
import {Container,Row,ListGroup,Card,Button} from 'react-bootstrap';

export default function Resume() {
  return (
    <Container fluid>
      <Row>
      <h1>Resume</h1>
      </Row> 
      <Button variant="outline-info" href= "src/components/pages/assets/Edgar-Ortega-Resume-2021.pdf" download>  Download Resume Here </Button>
      <Card style={{ width: '18rem' }}>
      <Card.Title>Proficiencies </Card.Title>
      <ListGroup variant ="flush">
  <ListGroup.Item action variant="light"> HTML </ListGroup.Item>
  <ListGroup.Item action variant="light">CSS</ListGroup.Item>
  <ListGroup.Item action variant="light">JavaScript</ListGroup.Item>
  <ListGroup.Item action variant="light">MongoDB</ListGroup.Item>
  <ListGroup.Item action variant="light">Express</ListGroup.Item>
  <ListGroup.Item action variant="light">Node.js</ListGroup.Item>
  <ListGroup.Item action variant="light" >React</ListGroup.Item>
  <ListGroup.Item action variant="light" >MySQL</ListGroup.Item>
</ListGroup>
</Card>
    </Container>
  );
}
