import  { Component } from 'react'
import {OldList, NewList, OneList} from './List'

class Test extends Component {
  render() {
    return (
      <div style={{"backgroundColor":"red"}}>
        <OldList />
        <NewList />
        <NewList />
        <NewList />
        <NewList />
      </div>
    )
  }
}

export default Test