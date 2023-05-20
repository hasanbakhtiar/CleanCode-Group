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
      users:[]
    }
  }

  userFetch=(comingkeyword)=>{
      axios.get(`https://api.github.com/search/users?q=${comingkeyword}`)
      .then(res=>this.setState({users:res.data.items}))
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Search formData={this.userFetch}/>
          <UserList senddata={this.state.users} />
        </Container>
      </>
    )
  }
}

export default App