import React, { Component } from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Search from './components/Search'
import UserList from './components/UserList'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[],
      screen:"d-none"
    }
  }

  userFetch=(comingkeyword)=>{
      axios.get(`https://api.github.com/search/users?q=${comingkeyword}`)
      .then(res=>this.setState({users:res.data.items,
      screen:"d-block"}))
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Search formData={this.userFetch}/>
          {this.state.users.length===0?<div className={this.state.screen}><img src="https://media4.giphy.com/media/l2R06FEpVRk6IroNq/giphy.gif" alt="" /></div>:<UserList senddata={this.state.users} />}
        </Container>
      </>
    )
  }
}

export default App