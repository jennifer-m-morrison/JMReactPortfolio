import React from 'react';
import { Col } from 'react-bootstrap';
import SectionContainer from './SectionContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import './Skills.css';
import skillsPic from '../assets/skills.png';


function Skills() {
    return (
        <SectionContainer
            wrapperClassName="skills-wrapper"
            wrapperId="skills"
            containerClassName="skills-container"
            title="Technical Skills">
            <Col xs={10} md={10} lg={5}>
                <p className="lh-lg fs-5">Through my classes at Wake Tech Community College and self-directed learning, I have gained technical knowledge in the following languages, frameworks, and libraries:</p>
                <ul className="skills-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Figma</li>
                </ul>
            </Col>
            <Col xs={9} md={7} lg={4} >
                <img src={skillsPic} className="img-profile img-fluid mx-auto" alt="Computer screen filled with code and solid circles labelled with programming languages floating on top" />
            </Col>
        </SectionContainer>
    );
}

export default Skills;