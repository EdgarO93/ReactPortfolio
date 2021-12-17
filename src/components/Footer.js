import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin
  } from "react-icons/ai";

export default function Footer(){
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  style={{ color: "teal" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <   AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );



}