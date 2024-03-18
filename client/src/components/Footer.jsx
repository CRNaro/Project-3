import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className='footer'>
        <Container fluid className="flex-grow-1">
            <Row>
            <Col>
                <Card className="footer-card">
                <Card.Body>
                    <Card.Title>Footer</Card.Title>
                    <Card.Text>
                    <Link to='/about'>About</Link>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </footer>
    );
}

export default Footer;