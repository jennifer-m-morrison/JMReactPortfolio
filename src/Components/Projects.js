import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import SectionContainer from './SectionContainer';
import oasisPic from '../assets/oasis.png';
import reactCalculator from '../assets/reactCalculator.png';
import tyrellPic from '../assets/tyrrell.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './Projects.css';

function Projects() {
    return(
        <SectionContainer
            wrapperClassName="projects-wrapper"
            wrapperId="projects"
            containerClassName="projects-container"
            title="My Projects">
            <Col xs={10} md={6} lg={4} className="cardCol">
                <Card className="card-container">
                    <Card.Img src={tyrellPic} />
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">Tyrrell County</Card.Title>
                        <Card.Text>
                            A responsive redesign that focused on optimizing user experience for visitors, residents, and county administrators.
                        </Card.Text>
                        <a href="https://wcet.waketech.edu/jmmorrison2/web125/final-project/tyrrell/index.html" target="_blank" rel="noopener noreferrer">
                            <Button className="btn-light mt-2">Visit Site</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={10} md={6} lg={4} className="cardCol">
                <Card className="card-container">
                    <Card.Img src={oasisPic} />
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">Oasis Books</Card.Title>
                        <Card.Text>
                            A responsive promotional event for a bookstore that includes a homepage, registration form, and confirmation details.
                        </Card.Text>
                        <a href="https://wcet.waketech.edu/jmmorrison2/WEB110/oasis/index.html" target="_blank" rel="noopener noreferrer">
                            <Button className="btn-light mt-2">Visit Site</Button></a>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={10} md={6} lg={4} className="cardCol">
                <Card className="card-container">
                    <Card.Img src={reactCalculator} />
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">React Online Calculator</Card.Title>
                        <Card.Text>
                            Built with React, this online calculator  perform basic math functions and calculations.
                        </Card.Text>
                        <a href="https://jennifer-m-morrison.github.io/ReactCalculator/" target="_blank" rel="noopener noreferrer">

                            <Button className="btn-light mt-2">Visit Site</Button></a>
                    </Card.Body>
                </Card>
            </Col>
            </SectionContainer>
    );
}



// function Projects() {
//     return (
//         <div className="projects-wrapper pb-2" id="projects">
//             <Container className="px-0 py-5 mx-auto w-100">
//                 <h1 className="text-center">My Projects</h1>
//                 <Row className="d-flex justify-content-center align-content-center g-5 mt-1">
//                     <Col xs={10} md={6} lg={4} className="cardCol">
//                         <Card className="card-container">
//                             <Card.Img src={tyrellPic} />
//                             <Card.Body className="card-body">
//                                 <Card.Title className="text-center">Tyrrell County</Card.Title>
//                                 <Card.Text>
//                                     A responsive redesign that focused on optimizing user experience for visitors, residents, and county administrators. 
//                                 </Card.Text>
//                                 <a href="https://wcet.waketech.edu/jmmorrison2/web125/final-project/tyrrell/index.html" target="_blank" rel="noopener noreferrer">
//                                     <Button className="btn-light mt-2">Visit Site</Button>
//                                 </a>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col xs={10} md={6} lg={4} className="cardCol">
//                         <Card className="card-container">
//                             <Card.Img src={oasisPic} />
//                             <Card.Body className="card-body">
//                                 <Card.Title className="text-center">Oasis Books</Card.Title>
//                                 <Card.Text>
//                                     A responsive promotional event for a bookstore that includes a homepage, registration form, and confirmation details.
//                                 </Card.Text>
//                                 <a href="https://wcet.waketech.edu/jmmorrison2/WEB110/oasis/index.html" target="_blank" rel="noopener noreferrer">
//                                 <Button className="btn-light mt-2">Visit Site</Button></a>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col xs={10} md={6} lg={4} className="cardCol">
//                         <Card className="card-container">
//                             <Card.Img src={reactCalculator} />
//                             <Card.Body className="card-body">
//                                 <Card.Title className="text-center">React Online Calculator</Card.Title>
//                                 <Card.Text>
//                                     Built with React, this online calculator  perform basic math functions and calculations.
//                                 </Card.Text>
//                                 <a href="https://jennifer-m-morrison.github.io/ReactCalculator/" target="_blank" rel="noopener noreferrer">
//                                     
//                                 <Button className="btn-light mt-2">Visit Site</Button></a>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

export default Projects;