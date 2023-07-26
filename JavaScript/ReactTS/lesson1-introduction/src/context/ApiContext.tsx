import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react"
type propType = {
    children:any
}

export const ApiContext = createContext<any>(null);


export const ApiProvider = ({children}:propType) => {

    const [data,setData] = useState<any[]>([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res:any)=>setData(res.data))
    },[])
  return (
    <ApiContext.Provider value={[data,setData]} >{children}</ApiContext.Provider>
  )
}
