import {Card, Button,ButtonGroup} from 'react-bootstrap';



function Project(props) {
  return (
    <Card className="project-card-view" border="info" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.imgPath}  alt="card-img"  style={{ maxHeight: '10rem'}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
    <ButtonGroup size="sm" >
          <Button variant="primary" href={props.deploy} target="_blank" className='btn'>
          Launch
        </Button>
        <Button  href={props.link} target="_blank" className='btn2'>
       Github
        </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
export default Project;
