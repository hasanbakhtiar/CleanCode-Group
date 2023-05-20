import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class SingleCard extends Component {
    render() {
        const { login, avatar_url, html_url, node_id } = this.props.alldata;
        return (
            <Col sm={6} md={4}>
                <Card >
                    <Card.Img variant="top" src={avatar_url} />
                    <Card.Body>
                        <Card.Title>{login}</Card.Title>
                        <Card.Text>
                            {node_id}
                        </Card.Text>
                        <a className="btn btn-dark" href={html_url} target='_blank' rel="noreferrer">Go Profile</a>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleCard