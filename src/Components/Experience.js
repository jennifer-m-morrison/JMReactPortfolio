import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";

function Experience() {
    return (
        <div class="experience-wrapper" id="experience">
            <Container className="experience-container px-0 py-5 mx-auto">
                <h1 className="text-center mb-5">Professional Experience</h1>
                <Row className="justify-content-center align-items-center g-4">
                    <Col xs={10} md={11} lg={5} >
                        <h3 className="experience-text mb-2">XSAg.com</h3>
                        <h5 className="experience-text mb-4">Operations Analyst and Beta Tester</h5>
                        <ul>
                        <li>Created manual for beta testing and collaborated with developers to deploy  new site upgrades
                        </li>
                        <li>Conducted routine user testing to implement new features and site enhancements</li>
                        </ul>
                    </Col>
                    <Col xs={10} md={11} lg={5} >
                        <h3 className="experience-text mb-2">Rhone Poulenc Ag Company</h3>
                        <h5 className="experience-text mb-4">Market Research Analyst</h5>
                        <ul>
                            <li>Coordinated marketing research projects concerning brand awareness, pricing, and customer satisfaction
                            </li>
                            <li>Developed advanced querying techniques in MS Access/Oracle DB for marketing team</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="w-75 mx-auto" />
                <h2 className="text-center py-4">Education</h2>
                <Row className="justify-content-center align-items-evenly g-5">
                    <Col xs={10} md={5} lg={4} className="experience-text d-flex flex-column">
                        <p><a href="https://www.waketech.edu/">Wake Tech Community College</a><br />Raleigh, NC</p>
                        <p>Pursuing A.A.S. Web Development</p>
                    </Col>
                    <Col xs={10} md={5} lg={4} className="experience-text d-flex flex-column">
                        <p><a href="https://www.wm.edu"
                            target="_blank" rel="noopener noreferrer">College of William and Mary</a> <br />Williamsburg, VA</p>
                        <p>B.A. Economics</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Experience;