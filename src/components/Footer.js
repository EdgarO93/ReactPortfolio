import React from 'react'
import {Container,Row,Col, Nav} from 'react-bootstrap'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillLinkedin
  } from "react-icons/ai";
  import "./Footer.css"

export default function Footer(){
    return (
      <Container fluid className="footer" style={{ display: "inline" }}>
        <Row>
          <Col md="4" className="footer-body">
            <Nav fill id="footnav" className="justify-content-center" activeKey="/home">
              <Nav.Item className="social-icons">
                <a
                  href="https://github.com/EdgarO93"
                  style={{ color: "#0E6BA8"}}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={70} className= "icon"/>
                </a>
              </Nav.Item>
              <Nav.Item className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edgar-ortega/"
                  style={{ color: "#0E6BA8" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={70} className= "icon" />
                </a>
              </Nav.Item>
              <Nav.Item className="social-icons">
                <a
                  href="https://twitter.com/ChicagosEdgar"
                  style={{ color: "#0E6BA8" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <  AiOutlineTwitter size={70} className= "icon"/>
                </a>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    );



}