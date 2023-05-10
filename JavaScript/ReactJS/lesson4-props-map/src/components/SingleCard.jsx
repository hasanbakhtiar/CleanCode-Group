import React, { Component } from 'react'
import Footer from './Footer'

class SingleCard extends Component {
  render() {
    return (
        <div className='col-12 col-sm-6 col-md-4'>
        <div className="card" >
          <img src={this.props.photo} height={300} className="card-img-top" alt={this.props.title} />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.price}$</p>
            <button  className={`btn btn-${this.props.stock?"success":"danger"}`}>{this.props.stock?"in stock":"stock out"}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleCard