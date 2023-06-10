import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleCard = ({ alldata }) => {
  return (
    <Col sm={12} md={4}>
      <Card >
        <Card.Img height={300} variant="top" src={alldata.images[0]} />
        <Card.Body>
          <Card.Title>{alldata.title}</Card.Title>
          <Link to={`/products/${alldata.id}`} className="btn btn-warning me-3">Read more</Link>
          <Button variant="primary">Add to card</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard