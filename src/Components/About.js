import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/jmprofile.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
    return (
        <div className="about-wrapper" id="about">
            <Container className= "about-container px-0 py-5 mx-auto">
                <h1 className="text-center mb-5">About Me</h1>
                <Row className="d-flex justify-content-center align-content-center g-5">
                    <Col xs={9} md={7} lg={3} >
                        <img src={profilePic} className="img-profile img-fluid" alt="Jennifer Morrison 
                        wearing black floral blouse in front of brick wall" />
                    </Col>
                    <Col xs={10} md={10} lg={6}>
                        <p className="lh-lg fs-5">I am an aspiring front-end web developer with a passion for creating dynamic, user-friendly websites and applications. My background in education and beta testing has given me a unique perspective on how to craft digital experiences that are both informative and engaging. I am excited to apply my skills in HTML, CSS, JavaScript, and React to build innovative digital solutions.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;