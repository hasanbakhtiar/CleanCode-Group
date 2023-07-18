import React, {  useRef } from 'react'
import MyInput from './MyInput';




const AppUseImperativeHandle = () => {

  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.hi();
  }
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>send</button>
    </div>
  )
}

export default AppUseImperativeHandle