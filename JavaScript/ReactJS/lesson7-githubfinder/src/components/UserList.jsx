import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from './SingleCard'


class UserList extends Component {
    render() {
        return (
          <Row className='g-5'>
            {this.props.senddata.map(item=>(
            <SingleCard key={item.id} alldata={item}/>
            ))}
          </Row> 
        )
    }
}

export default UserList