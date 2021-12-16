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
<Container  fluid="true" className="project-section">
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
              deploy="https://elliottdombrowski.github.io/NU-Project-1/"
              link="https://github.com/elliottdombrowski/NU-Project-1/"
            />
          </Col>

         

          <Col md={4}  className="project-card">
          <Project
              imgPath={workout}
              title="Workout Tracker"
              deploy="https://tracker-fitness-workouts.herokuapp.com/"
              link="https://github.com/EdgarO93/WorkoutTracker"
            />
          </Col>

          <Col md={4} className="project-card" style={{marginTop: "10px"}}>
          <Project
              imgPath={note}
              title="Note Taker"
              deploy="https://edgars-note-taker.herokuapp.com/"
              link="https://github.com/EdgarO93/NoteTaker"
            />
          </Col>

      

          <Col md={4}  className="project-card">
          <Project
              imgPath={budget}
              title="Budget Tracker"
              deploy="https://budget-tracker-app2021.herokuapp.com/"
              link="https://github.com/EdgarO93/BudgetTracker"
            />
          </Col>


          <Col md={4}  className="project-card">
          <Project
              imgPath={employee}
              title= "Employee Tracker"
              deploy="https://watch.screencastify.com/v/N5hVgUr3WzhNTuXzVu9T"
              link="https://github.com/EdgarO93/Employee-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}

