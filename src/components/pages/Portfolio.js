import React from 'react';
import Project from "./Project";
import'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";

//images
import ticket from "./ticket.png";
import budget from "./budget.png";
import  employee from "./employee.png";
import note from "./note.png";
import workout from "./workout.png";
import swept from "./swept.png";



export default function Portfolio() {
  return (
<Container  fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "grey" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Project
           imgPath={ticket} 
              title="Ticket Stack Project"
              deploy="https://customer-service-dashboard.herokuapp.com/"
              link="https://github.com/justinkemp10/customer_service_portal"
            />
          </Col>

          <Col className="project-card">
          <Project
              imgPath={swept}
              title="Swept Project"
              deploy="https://customer-service-dashboard.herokuapp.com/"
              link="https://github.com/justinkemp10/customer_service_portal"
            />
          </Col>

         

          <Col md={4}  className="project-card">
          <Project
              imgPath={workout}
              title="Workout Tracker"
              deploy="https://customer-service-dashboard.herokuapp.com/"
              link="https://github.com/justinkemp10/customer_service_portal"
            />
          </Col>

          <Col md={4} className="project-card">
          <Project
              imgPath={note}
              title="Note Taker"
              deploy="https://customer-service-dashboard.herokuapp.com/"
              link="https://github.com/justinkemp10/customer_service_portal"
            />
          </Col>

      

          <Col md={4}  className="project-card">
          <Project
              imgPath={budget}
              title="Budget Tracker"
              deploy="https://customer-service-dashboard.herokuapp.com/"
              link="https://github.com/justinkemp10/customer_service_portal"
            />
          </Col>


          <Col md={4}  className="project-card">
          <Project
              imgPath={employee}
              title="Employee Tracker"
              deploy="https://customer-service-dashboard.herokuapp.com/"
              link="https://github.com/justinkemp10/customer_service_portal"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}

