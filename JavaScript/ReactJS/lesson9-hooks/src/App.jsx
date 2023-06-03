import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [user,setUser] = useState([]);
  

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUser(res.data))
  },[])
  
  
  return (
    <div className='container my-5'>
      {user.slice(0,3).map(u=>{
        return <li key={u.id}>{u.name}</li>
      })}
    </div>
  )
}

export default App