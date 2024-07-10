import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jmlogo from '../assets/jmlogo2.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar navbar-light" >
            <Container>
                <Navbar.Brand href="#nav">
                    <img
                        src={jmlogo}
                        className="d-inline-block align-center me-3"
                        id="nav"
                        alt="Jennifer Morrison Designs logo"
                    />
                    <span className="brand-title d-none d-md-inline-block">Jennifer Morrison Designs</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#link">Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;