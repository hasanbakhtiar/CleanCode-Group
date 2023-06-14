import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const Basket = () => {
    const { items, updateItemQuantity, removeItem, isEmpty,cartTotal,emptyCart } = useCart();
    if (isEmpty) {
        return <div className="d-flex justify-content-center">
            <img src="https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif" alt="" />
        </div>
    }
    return (
        <>
            <h1 className='text-center my-5'>Basket</h1>
            <Row>
                <Col sm={12} md={9}><Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((value, c) => (
                            <tr>
                                <td>{c + 1}</td>
                                <td><img height={100} src={value.images[0]} alt="" /></td>
                                <td>{value.title}</td>
                                <td>{value.price * value.quantity}$</td>
                                <td>
                                    <Button variant='warning' onClick={() => { updateItemQuantity(value.id, value.quantity - 1) }}>-1</Button>
                                    <span className='mx-3'>{value.quantity}</span>
                                    <Button variant='success' onClick={() => { updateItemQuantity(value.id, value.quantity + 1) }}>+1</Button>
                                </td>
                                <td><Button variant='danger' onClick={() => { removeItem(value.id) }}>X</Button></td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
                </Col>
                    <Col sm={12} md={3}>
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Total Price:{cartTotal}$</h2></li>
                            <li class="list-group-item"><Button variant='outline-danger' onClick={()=>{emptyCart()}}>Remove basket</Button></li>
                            <li class="list-group-item"><Button variant='secondary'>Checkout</Button></li>
                        </ul>
                    </Col>
            </Row>
        </>
    )
}

export default Basket