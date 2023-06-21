import React, { useContext, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { Col, Row } from 'react-bootstrap'
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
    const [product] = useContext(ProductContext);
    const [catData,setCatData] = useState(product);
    const filterResult = (catItem)=>{
            const result = product.filter(cd=>(
                cd.category === catItem
            ));
            setCatData(result);
    }
    return (
        <div>
            <h1 className='my-5 text-center'>Product List</h1>
            <Row>
                <Col sm={12} md={3}>
                    <ul className="list-group">
                        <li onClick={()=>{filterResult('smartphones')}} className="list-group-item">Smartphones</li>
                        <li onClick={()=>{filterResult('laptops')}} className="list-group-item">Laptops</li>
                        <li onClick={()=>{filterResult('fragrances')}} className="list-group-item">Fragrances</li>
                        <li onClick={()=>{filterResult('skincare')}} className="list-group-item">Skincare</li>
                        <li onClick={()=>{filterResult('groceries')}} className="list-group-item">Groceries</li>
                    </ul>

                </Col>
                <Col sm={12} md={9}>
                    <Row className='g-5'>
                        {product.length ===0 ?<h1>Loading...</h1>:catData.length===0 ? product.map(item => (
                            <SingleCard alldata={item} />
                        )):catData.map(item => (
                            <SingleCard alldata={item} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ProductList