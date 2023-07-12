import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const SingleCard = ({title,auther}) => {
  return (
    <Col sm={12} md={4}>
      <Card >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {auther}
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default SingleCard