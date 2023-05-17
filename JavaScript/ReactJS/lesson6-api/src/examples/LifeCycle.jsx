import React, { Component } from 'react'
import SingleCard from './components/SingleCard';

class List extends Component{
  componentWillUnmount(){
    alert('deleted')
  }
  
  render(){
    return(
      <ol>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ol>
    )
  }
}



class App extends Component {

  constructor(){
    super();
    this.state={
      count:0,
      display:true
    }
    console.log('constructor is running...');
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate is running');
    // document.querySelector('p').style.backgroundColor = 'red';
  }
  
  componentDidMount(){
    console.log("componentDidMount is running");
  }
  
   
  render() {
    let data ;
    if (this.state.display) {
       data = <List />
    }
    


    return (
      <div className='container'>


            {data}
            <button onClick={()=>{
              this.setState({display:false})
            }}>delete</button>
        
          {/* <p>{this.state.count}</p>
          <button onClick={()=>{
            this.setState({count:this.state.count + 1})
          }}>+</button> */}
      </div>
    )
  }
}

export default App