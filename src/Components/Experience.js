import React from 'react';
import { Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";
import SectionContainer from './SectionContainer';

function Experience() {
    return (
    <SectionContainer
        wrapperClassName="experience-wrapper"
        wrapperId="experience"
        containerClassName="experience-container"
        title="Professional Experience">
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
                <h3 className="experience-text">Rhone Poulenc Ag Company</h3>
                <h5 className="experience-text mb-4">Market Research Analyst</h5>
                <ul>
                    <li>Coordinated marketing research projects concerning brand awareness, pricing, and customer satisfaction
                    </li>
                    <li>Developed advanced querying techniques in MS Access/Oracle DB for marketing team</li>
                </ul>
            </Col>
            <hr className="w-75 mx-auto" />
            <h2 className="text-center mb-0 mt-3">Education</h2>
                <Col xs={11} md={5} lg={4} className="experience-text d-flex flex-column fs-5">
                    <p><a href="https://www.waketech.edu/" target="_blank" rel="noopener noreferrer" className="fs-4">Wake Tech Community College</a><br />Raleigh, NC</p>
                    <p>Pursuing A.A.S. Web Development</p>
                </Col>
                <Col xs={11} md={5} lg={4} className="experience-text d-flex flex-column fs-5">
                    <p><a href="https://www.wm.edu"
                        target="_blank" rel="noopener noreferrer" className="fs-4">College of William and Mary</a> <br />Williamsburg, VA</p>
                    <p>B.A. Economics</p>
                </Col>



    </SectionContainer>
    );
}

export default Experience;
