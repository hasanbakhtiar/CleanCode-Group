import React, { Component } from 'react'
class Card extends Component {
  render() {
    return (
   <div className='col-12 col-sm-6 col-md-4'>
        <div className="card" >
        <img src={this.props.photo} alt="err" className="card-img-top"  />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.decs}</p>
        </div>
      </div>
   </div>
    )
  }
}

export default Card