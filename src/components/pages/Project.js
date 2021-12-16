import {Card, Button,ButtonGroup} from 'react-bootstrap';



function Project(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath}  alt="card-img"  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
    <ButtonGroup size="sm" >
          <Button variant="primary" href={props.deploy} target="_blank">
          Launch
        </Button>
        <Button variant="secondary" href={props.link} target="_blank">
       Github
        </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
export default Project;
