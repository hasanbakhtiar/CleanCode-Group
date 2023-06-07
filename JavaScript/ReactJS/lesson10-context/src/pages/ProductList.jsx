import React, { useContext } from 'react'
import SingleCard from '../components/SingleCard'
import { Row } from 'react-bootstrap'
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
    const [product] = useContext(ProductContext);


    return (
        <div>
            <h1 className='my-5 text-center'>Product List</h1>
            <Row className='g-5'>
                {product.map(item => (
                    <SingleCard alldata={item}/>
                ))}
            </Row>
        </div>
    )
}

export default ProductList