import React from 'react'
import { useSelector } from 'react-redux'


const App = () => {
    const mydata = useSelector(store=>store)

    
  return (
    <ul>
        {mydata.map(i=>(
          <div key={i.id}>
          <hr />
          <ol key={i.id}>
            <li key={i.id}>{i.title}</li>
            <li key={i.id}>{i.auther}</li>
          </ol>
          <hr />
          </div>
        ))}
    </ul>
  )
}

export default App