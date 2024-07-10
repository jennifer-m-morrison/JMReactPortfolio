import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Skills.css';
import skillsPic from '../assets/skills.png';

function Skills() {
    return (
        <div className="skills-wrapper" id="skills">
            <Container className="skills-container px-0 py-5 mx-auto w-100">
                <h1 className="text-center mb-5">Technical Skills</h1>
                <Row className="d-flex justify-content-center align-content-center g-5">    
                    <Col xs={10} md={10} lg={5}>
                        <p className="lh-lg fs-5">Through my classes at Wake Tech Community College and self-directed learning, I have gained technical knowledge in the following languages, frameworks, and libraries:</p>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Col>
                    <Col xs={9} md={7} lg={4} >
                        <img src={skillsPic} className="img-profile img-fluid mx-auto" alt="Computer screen filled with code and solid circles labelled with programming languages floating on top" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;