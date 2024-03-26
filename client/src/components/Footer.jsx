import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../styles/Footer.css";

var style = {
    height: "8vh",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: "2vh",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style} >
                <Container fluid>
                    <Row>
                        <Col>
                            <Card className="footer-card border-0" >
                                <Card.Body style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Card.Title>GitHub Links</Card.Title>
                                    <Card.Text>
                                        <a href="https://github.com/baldwisj" target="_blank" rel="noopener noreferrer" className="footer-link">baldwisj</a>
                                        <a href="https://github.com/Irroc" target="_blank" rel="noopener noreferrer" className="footer-link">Irroc</a>
                                        <a href="https://github.com/AdamLSmith1984" target="_blank" rel="noopener noreferrer" className="footer-link">AdamLSmith1984</a>
                                        <a href="https://github.com/CRNaro" target="_blank" rel="noopener noreferrer" className="footer-link">CRNaro</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Footer;