import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contacts() {
    return (
        <Container>
            <Form gap={2} className="col-md-4 mx-auto mt-5 bg-dark-subtle p-5" >
                <h3 className='text-center'>Отправте ваши данные</h3>
                <Row className='mt-3'>
                    <Col>
                        <Form.Control placeholder="Ваше имя" />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Form.Control placeholder="Ваша фамилия" />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Form.Control placeholder="Телефон" />
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center mt-3'>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Отправить</Button>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck2"
                            label="Запомнить меня"
                        />
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
