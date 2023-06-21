import { createContext, useState } from "react";

export const LangContext = createContext();
export const LangProvider = ({children})=>{
    const [lang,setLang] = useState('en');
    return <LangContext.Provider value={[lang,setLang]}>
        {children}
    </LangContext.Provider>
} 