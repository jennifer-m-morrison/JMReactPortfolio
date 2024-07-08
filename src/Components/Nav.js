import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jmlogo from '../assets/jmlogo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar navbar-light">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={jmlogo}
                        className="d-inline-block align-center me-3"
                        alt="Jennifer Morrison Designs logo"
                    />
                Jennifer Morrison Designs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#link">About Me</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Skills</Nav.Link>
                        <Nav.Link href="#link">Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;