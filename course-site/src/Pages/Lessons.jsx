import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from '../Assets/Card2.jpg';
import Card2 from '../Assets/Card3.webp';
import Card3 from '../Assets/Card1.jpg';
import Card4 from '../Assets/Card5.png';

export default function Lessons() {
	return (
		<Container>
			<h3 className='text-center mt-5'>Нужная информация</h3>
			<Row>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card1} style={{ height: '170px' }} />
						<Card.Body>
							<Card.Title>Что такое функция в JS </Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card2} style={{ height: '170px' }} />
						<Card.Body>
							<Card.Title>VUE против REACT</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card3} style={{ height: '170px' }}/>
						<Card.Body>
							<Card.Title>Первое бургер меню</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card4} style={{ height: '170px' }}/>
						<Card.Body>
							<Card.Title>Что таое SPA</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card1} style={{ height: '170px' }} />
						<Card.Body>
							<Card.Title>Что такое функция в JS </Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card2} style={{ height: '170px' }} />
						<Card.Body>
							<Card.Title>VUE против REACT</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card3} style={{ height: '170px' }}/>
						<Card.Body>
							<Card.Title>Первое бургер меню</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card4} style={{ height: '170px' }}/>
						<Card.Body>
							<Card.Title>Что таое SPA</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card1} style={{ height: '170px' }} />
						<Card.Body>
							<Card.Title>Что такое функция в JS </Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card2} style={{ height: '170px' }} />
						<Card.Body>
							<Card.Title>VUE против REACT</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card3} style={{ height: '170px' }}/>
						<Card.Body>
							<Card.Title>Первое бургер меню</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '19rem' }} className='mt-5'>
						<Card.Img variant="top" src={Card4} style={{ height: '170px' }}/>
						<Card.Body>
							<Card.Title>Что таое SPA</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Читать далее ...</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
