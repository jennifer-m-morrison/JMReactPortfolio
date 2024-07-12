import React from 'react';
import { Col } from 'react-bootstrap';
import SectionContainer from './SectionContainer';
import jmlogo from '../assets/jmlogo400.png';
import LIlogo from '../assets/LILogo200.png';
import GHlogo from '../assets/github.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";


function Contact() {
    return (
        <SectionContainer
            wrapperClassName="contact-wrapper"
            wrapperId="connect"
            containerClassName="contact-container"
            title="Let's Connect!">
            <Col xs={6} md={4} lg={3} >
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
                </SectionContainer>
    );
}

export default Contact;