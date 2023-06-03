import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const AppUseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('old');

  useEffect(() => {
    console.log('useEffect is running');
  },[count])


  return (
    <Container className='my-5'>


      <span>{count}</span>
      <Button onClick={() => {
        setCount(count + 1)
      }}>+</Button>
      <br />
      {data}
      <Button onClick={() => { setData('new') }}>change</Button>


    </Container>

  )
}

export default AppUseEffect