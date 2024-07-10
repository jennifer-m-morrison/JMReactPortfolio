import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import oasisPic from '../assets/oasis.png';
import reactCalculator from '../assets/reactCalculator.png';
import tyrellPic from '../assets/tyrell.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import './Projects.css';



function Projects() {
    return (
        <div className="projects-wrapper pb-2" id="projects">
            <Container className="px-0 py-5 mx-auto w-100">
                <h1 className="text-center">My Projects</h1>
                <Row className="d-flex justify-content-center align-content-center g-5 mt-1">
                    <Col xs={10} md={6} lg={4}>
                        <Card className="card-container">
                            <Card.Img src={tyrellPic} />
                            <Card.Body className="card-body d-flex flex-column align-items-center">
                                <Card.Title>Tyrrell County</Card.Title>
                                <a href="https://wcet.waketech.edu/jmmorrison2/web125/final-project/tyrrell/index.html" target="_blank" rel="noopener noreferrer">
                                    <Button className="btn-light mt-2">Visit Site</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={6} lg={4}>
                        <Card className="card-container">
                            <Card.Img src={oasisPic} />
                            <Card.Body className="card-body d-flex flex-column align-items-center">
                                <Card.Title>Oasis Books</Card.Title>
                                <a href="https://wcet.waketech.edu/jmmorrison2/WEB110/oasis/index.html" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-light mt-2">Visit Site</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={6} lg={4}>
                        <Card className="card-container">
                            <Card.Img src={reactCalculator} />
                            <Card.Body className="card-body d-flex flex-column align-items-center">
                                <Card.Title>React Online Calculator</Card.Title>
                                <a href="https://jennifer-m-morrison.github.io/ReactCalculator/" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-light mt-2">Visit Site</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;