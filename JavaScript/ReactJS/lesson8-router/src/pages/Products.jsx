import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard';

class Products extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(res=>this.setState({products:res.data}))
    }
    
  render() {
    return (
   <>
   <h1 className='text-center my-5'>Product List</h1>
   <Row className='g-5'>
        {this.state.products.map(item=>{
            return <SingleCard 
            title={item.title.substring(0,30)}
            price={item.price}
            desc={item.description.substring(0,30)}
            photo={item.image}
            />
        })}
      </Row>
   </>
    )
  }
}

export default Products