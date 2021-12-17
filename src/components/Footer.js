import React from 'react'
import {Container,Row,Col, Nav} from 'react-bootstrap'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin
  } from "react-icons/ai";

export default function Footer(){
    return (
      <Container fluid className="footer" style={{ display: "inline" }}>
        <Row>
          <Col md="4" className="footer-body">
            <Nav fill className="justify-content-center" activeKey="/home">
              <Nav.Item className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </Nav.Item>
              <Nav.Item className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </Nav.Item>
              <Nav.Item className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </Nav.Item>
              <Nav.Item className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <   AiFillInstagram />
                </a>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    );



}