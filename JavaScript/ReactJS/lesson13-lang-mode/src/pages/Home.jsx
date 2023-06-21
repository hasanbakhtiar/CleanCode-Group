import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
const Home = () => {
    const [product] = useContext(ProductContext);
    const [lang] = useContext(LangContext);
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">1001 Best</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to='/products'>
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Shop Now</button>
                        </Link>
                       
                    </div>
                </div>
            </div>

           <section className="my-5">
           <h1 className='my-5 text-center'>{lang==='en'?"Last Product":"Sonuncu mehsullar"}</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {product.slice(0,5).map((item)=>{
                    return  <SwiperSlide><Link to={`/products/${item.id}`}><Col style={{"width":"100%"}} sm={12} md={4}><Card >
                    <Card.Img height={300} variant="top" src={item.images[0]} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Col> </Link></SwiperSlide> 
                })}
                
          
            </Swiper>
           </section>


        </>

    )
}

export default Home