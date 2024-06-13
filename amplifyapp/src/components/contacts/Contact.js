import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Contacts() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row className="px-2 my-2">
                <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="Panda.jpg" />
                        <Card.Body>
                            <Card.Title>Adorable Panda</Card.Title>
                            <Card.Text>
                                Meet this fluffy panda and explore its playful antics.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="Naruto.jpeg" />
                        <Card.Body>
                            <Card.Title>Naruto Uzumaki</Card.Title>
                            <Card.Text>
                                Join Naruto on his journey to become the greatest ninja.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="px-4 my-5">
               
            </Row>
            <Row className="px-2 my-2">
                <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="panda 2.jpg" />
                        <Card.Body>
                            <Card.Title>Another Panda</Card.Title>
                            <Card.Text>
                                This panda enjoys bamboo and cuddling with its friends.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '12rem' ,}}>
                        <Card.Img variant="top" src="echo.png" />
                        <Card.Body>
                            <Card.Title>Echo</Card.Title>
                            <Card.Text>
                                Discover Echo, The member of Ben10.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;
