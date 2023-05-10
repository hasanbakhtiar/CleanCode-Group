import React, { Component } from 'react'

export class OldList extends Component {
  render() {
    return (
      <div>OldList</div>
    )
  }
}


export class NewList extends Component {
    render() {
      return (
        <div>
            <ol>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ol>
        </div>
      )
    }
  }



export class OneList extends Component {
    render() {
      return (
        <div>NewList</div>
      )
    }
  }
  
