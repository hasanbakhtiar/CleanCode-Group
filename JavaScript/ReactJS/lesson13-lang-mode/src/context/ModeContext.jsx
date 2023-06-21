import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({children})=>{
    const [mode,setMode] = useState(localStorage.getItem('mode'));
    useEffect(()=>{
        mode==='light' ? document.body.className='light':document.body.className='dark'; 
    },[mode])
    return <ModeContext.Provider value={[mode,setMode]}>
        {children}
    </ModeContext.Provider>
}