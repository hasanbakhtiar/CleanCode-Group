import React, { useContext } from 'react'
import { myType } from '../config'




const List:React.FC<myType> = ({title}) => {
  return (
    <ol>
        {title}
        
    </ol>
  )
}

export default List