import React from 'react';
import dirImg from '../Assets/Dir.jpg'
import { Container, Row, Image, Col } from 'react-bootstrap';

export default function Description() {
  return (
    <Container>
        <Row className='mt-5'>
            <Col xs={4}>
                <Image roundedCircle className='w-100 mt-5' src={dirImg} />
            </Col>
            <Col>
                <h3 className='text-center'>Директор</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nihil debitis nulla incidunt expedita esse ipsam, sunt sequi veniam nisi consectetur quam, possimus maxime voluptates? Soluta nam non ipsum saepe? 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ullam pariatur aliquid neque, 
                    suscipit doloremque quis laborum hic aliquam cumque nemo laboriosam illo velit deserunt quidem aut 
                    voluptate voluptatem amet!
                </p>
            </Col>
        </Row>
    </Container>
  )
}
