import React from 'react';
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import LIlogo from '../assets/LILogo200.png';
import GHlogo from '../assets/github.png';

function Footer() {
    return (
        <footer className="py-3 text-center">
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
                className="mb-2"/>
                </a>
            </div>
            <p>&copy; 2024 Jennifer Morrison Designs</p>
            <a href="https://www.jennifermorrisondesigns.com" target="_blank" rel="noopener noreferrer"><p>jennifermorrisondesigns.com</p></a>
        </footer>
    );
}

export default Footer;  