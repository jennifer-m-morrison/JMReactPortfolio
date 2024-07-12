import React from 'react';
import { Container, Row} from 'react-bootstrap';

const SectionContainer = ({
    wrapperClassName,
    wrapperId,
    containerClassName,
    title,
    children,
}) => {
    return (
        <div className={wrapperClassName} id={wrapperId}>
            <Container fluid className={`px-0 py-5 mx-auto ${containerClassName}`}>
            <h1 className="text-center mb-5">{title}</h1>
            <Row className="d-flex justify-content-center align-content-center g-5">
            {children}
            </Row>
        </Container>
        </div>
    );
};

export default SectionContainer;