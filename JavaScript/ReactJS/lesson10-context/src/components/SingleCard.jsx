import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const SingleCard = ({alldata}) => {
  return (
    <Col sm={12} md={4}>
     <Card >
      <Card.Img variant="top" src={alldata.images[0]} />
      <Card.Body>
        <Card.Title>{alldata.title}</Card.Title>
        <Button variant="primary">Add to card</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default SingleCard