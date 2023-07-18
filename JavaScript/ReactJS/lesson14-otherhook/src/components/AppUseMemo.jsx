import React, { useMemo, useState } from 'react'
import users from '../data/users';

const AppUseMemo = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(null);
  const userRows = () => {
    console.log('user is running');
    return users.map(item => (
      <li onClick={() => { setUserId(item.id) }} key={item.id}>{item.username}</li>
    ))
  }

  const userRowsData = useMemo(() => userRows(), [userId])


  return (
    <div>
      {userId}
      <div>
      {userRowsData}
      </div>
      {count}
      <button onClick={() => {
        setCount(count + 1);
        console.log('counter is running');
      }}>+</button>
    </div>
  )
}

export default AppUseMemo