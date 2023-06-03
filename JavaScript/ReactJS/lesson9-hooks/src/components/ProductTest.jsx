import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'




const ProductTest = () => {

  const [product,setProduct] = useState([
    {
      id: 1,
      title: "Pen",
      price: 1
    },
    {
      id: 2,
      title: "Ruler",
      price: 5
    },
    {
      id: 3,
      title: "Copybook",
      price: 2
    }
  ])

  

  const newProduct=()=>{
    setProduct([...product, {
      id: 4,
      title: "Table",
      price: 1
    },
    {
      id: 5,
      title: "Chair",
      price: 5
    },])
  }
  

  return (
    <Container className='my-5'>
      <ol>
        {product.map(item=>{
          return <li key={item.id}>{item.title}-{item.price}$</li>
        })}
      </ol>
      <Button onClick={newProduct}>New Product</Button>
    </Container>
  )
}

export default ProductTest