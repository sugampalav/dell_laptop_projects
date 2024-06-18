import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function NotFound() {
    return (

        <Container className="vh-100 d-flex align-items-center justify-content-center">
            <Row>
                <Col className="text-center text-black font-sans">
                    <h1>404 Page Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound