// import React, { Component } from 'react'

// class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// export default App

// function App(){
//   return(
//     <h1>App Function</h1>
//   )
// }
// export default App


// const App = ()=>{
//   return(
//     <h1>Arrow Function Component</h1>
//   )
// }

// export default App


import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const App = () => {

  const [count,setCount] = useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  return (
    <Container className='mt-5'>
      <Button variant='danger'>-1</Button>
      <span className='mx-3'>{count}</span>
      <Button variant='success' onClick={increment}>+1</Button>
    </Container>
  )
}

export default App