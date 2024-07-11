import React from 'react';
import { Col } from 'react-bootstrap';
import SectionContainer from './SectionContainer';
import profilePic from '../assets/jmprofile.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
    return (
        <SectionContainer
            wrapperClassName="about-wrapper"
            wrapperId="about"
            containerClassName="about-container"
            title="About Me">
            <Col xs={9} md={7} lg={3} >
                <img src={profilePic} className="img-profile img-fluid" alt="Jennifer Morrison 
                        wearing black floral blouse in front of brick wall" />
            </Col>
            <Col xs={10} md={10} lg={5}>
                <p className="lh-lg fs-5">I am an aspiring front-end web developer with a passion for creating dynamic, user-friendly websites and applications. My background in education and beta testing has given me a unique perspective on how to craft digital experiences that are both informative and engaging. I am excited to apply my skills in HTML, CSS, JavaScript, and React to build innovative digital solutions for my clients.</p>
            </Col>
        </SectionContainer>
    );
}

export default About;