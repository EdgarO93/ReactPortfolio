import {Card, Button} from 'react-bootstrap';

function Project(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
    
          <Button variant="primary" href={props.deploy} target="_blank">
        
        </Button>
        <Button variant="secondary" href={props.link} target="_blank">
        
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Project;
