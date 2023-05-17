import React, { Component } from 'react'

class SingleCard extends Component {
  render() {
        const {name,image} = this.props.alldata;
    return (
      <div className='col-12 col-sm-6 col-md-4'>
            <div className="card" >
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            </div>

      </div>
    )
  }
}

export default SingleCard