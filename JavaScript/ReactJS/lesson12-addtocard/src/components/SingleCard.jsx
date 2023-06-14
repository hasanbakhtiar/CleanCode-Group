import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
const SingleCard = ({ alldata }) => {

  const { addItem } = useCart();
  const notify = () => toast.success('Product added', {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });;
  return (
    <Col sm={12} md={4}>
      <Card >
        <Card.Img height={300} variant="top" src={alldata.images[0]} />
        <Card.Body>
          <Card.Title>{alldata.title}</Card.Title>
          <Card.Title className='text-danger'>{alldata.price}$</Card.Title>
          <Link to={`/products/${alldata.id}`} className="btn btn-warning me-3">Read more</Link>
          <Button variant="primary" onClick={() => { notify(addItem(alldata)) }}>Add to card</Button>
          <ToastContainer
            position="bottom-right"
            autoClose={53}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard