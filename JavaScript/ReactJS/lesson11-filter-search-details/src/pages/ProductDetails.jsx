import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const ProductDetails = () => {
    const {url} = useParams();
    const [product] = useContext(ProductContext);
    const detailItems = product.find(p=>p.id.toString() === url);
  return (
            <>
            {!detailItems? <div className='d-flex justify-content-center'><img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err'/></div>:<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{detailItems.title}</h1>
      <p className="lead">{detailItems.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2">{detailItems.price}$</button>
        <LinkContainer to="/products"><Button type="button" variant='secondary' className=" btn-lg px-4">Back</Button></LinkContainer>
      </div>
    </div>
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={detailItems.images[0]} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
  </div>
</div>}
            </>

  )
}

export default ProductDetails