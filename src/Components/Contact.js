import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import jmlogo from '../assets/jmlogo400.png';
import LIlogo from '../assets/LILogo200.png';
import GHlogo from '../assets/github.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

function Contact() {
    return (
        <div class="contact-wrapper" id="connect">
            <Container className="contact-container px-0 py-4 mx-auto">
                <h1 className="text-center mb-3">Let's Connect!</h1>
                <Row className="d-flex justify-content-center align-content-center g-5">
                    <Col xs={6} md={5} lg={3} >
                        <img src={jmlogo} className="img-fluid" alt="Jennifer Morrison logo" />
                    </Col>
                    <Col xs={10} md={10} lg={5} className="contact-links d-flex flex-column align-items-center justify-content-center">
                        <h3 className="contact-title">Jennifer Morrison Designs</h3>
                        <p className="lh-lg fs-5"><a href="mailto:jmmorrison2@my.waketech.edu">jmmorrison2@my.waketech.edu</a></p>
                        <div>
                            <a href="https://www.linkedin.com/in/jenny-morrison-81259b2b2" target="_blank" rel="noopener noreferrer">
                                <img src={LIlogo}
                                    width="100"
                                    alt="LinkedIn logo"
                                    className="mb-2 me-4" />
                            </a>
                            <a href="https://github.com/jennifer-m-morrison" target="_blank" rel="noopener noreferrer">
                                <img src={GHlogo}
                                    width="50"
                                    alt="GitHub logo"
                                    className="mb-2" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Contact;