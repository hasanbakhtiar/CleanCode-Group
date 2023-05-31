import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap'

class SingleCard extends Component {
    render() {
        return (
            <Col sm={12} md={4}>
                <Card>
                    <Card.Img variant="top" height={300} src={this.props.photo} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}...</Card.Title>
                        <Card.Text>
                        {this.props.desc}...
                        </Card.Text>
                        <Card.Text>
                        {this.props.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleCard