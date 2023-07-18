import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [state,setState] = useState('data');

    useLayoutEffect(()=>{
        setState('updated');
        // alert("test")
    },[])
  return (
    <div>
        {state}
    </div>
  )
}

export default AppUseLayoutEffect