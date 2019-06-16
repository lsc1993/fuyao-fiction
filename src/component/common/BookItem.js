import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import preview from '../../res/img/fic1.jpeg'
import './BookItem.css'

export default class BookItem extends React.Component {

    render() {
        return (
            <div className="book-container">
                <Container>
                    <Row>
                        <Col xl={4} lg={4} md={6} xs={12}>
                            <div className="book-img-container">
                                <img src={preview} alt="hello" />
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={6} xs={12}>
                            <div className="book-title-container">
                                <div className="book-title">
                                    <p>{this.props.title}</p>
                                </div>
                                <div className="book-desc">
                                    <p>{this.props.desc}</p>
                                </div>
                                <div className="book-author-and-type">
                                    <p className="book-author">{this.props.author}</p>
                                    <p className="book-type">{this.props.type}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}