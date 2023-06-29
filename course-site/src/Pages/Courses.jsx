import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

export default function Courses() {
    return (
        <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="f1"
        >
            <Row>
                <Col sm={3}>
                    <Nav variant="pills"
                        className="flex-column"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="f1">
                                HTML/CSS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="f2">
                                JS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="f3">
                                REACT
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="f1">
                            <h3 className='text-center'>HTML/CSS</h3>
                            <p>
                                HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.
                                Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска,
                                далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="f2">
                            <h3 className='text-center'>JS</h3>
                            <p>
                                JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[9]).
                                JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[10].
                                Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.
                                На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке[~ 1][11].
                                Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США[12].
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="f3">
                            <h3 className='text-center'>REACT</h3>
                            <p>
                                React (иногда React.js или ReactJS) — JavaScript-библиотека[5] с открытым исходным кодом для разработки пользовательских интерфейсов.
                                React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций[6][7][8].
                                React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость разработки, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL.
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}