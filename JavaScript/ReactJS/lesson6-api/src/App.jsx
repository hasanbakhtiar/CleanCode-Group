import React, { Component } from 'react'
import SingleCard from './components/SingleCard'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

  }

  componentDidMount() {

    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => this.setState({ data: res.data.results }))




    // const fetchApi = async()=>{
    //     const items = await fetch('https://rickandmortyapi.com/api/character')
    //     const mainItems = await items.json();
    //     this.setState({data:mainItems.results})
    // }
    // fetchApi();

    // fetch("https://rickandmortyapi.com/api/character")
    // .then(res=>res.json())
    // .then(items=>this.setState({data:items.results}))
  }


  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>characters list</h1>
        <button className='btn btn-danger mb-3'
          onClick={() => { this.setState({ data: [] }) }}
        >delete all</button>
        <div className="row g-5">

          {this.state.data.length === 0 ? <h1>all data deleted</h1> : this.state.data.map(item => (
            <SingleCard key={item.id}
              alldata={item}
            />
          ))}

        </div>
      </div>
    )
  }
}

export default App