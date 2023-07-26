import { useContext, useRef, useState } from "react"
import List from "./components/List"
import { ApiContext } from "./context/ApiContext";
import Header from "./components/Header";

const App:React.FC = () => {
    const [state,setState] = useState<string | number>('hello');
    const inputRef = useRef<HTMLInputElement>(null);
    const [data] = useContext(ApiContext);

  return (
    <div>
      <Header />
        <input ref={inputRef} type="text" />
        {/* <List title={state}/> */}
        {data.map((item:any,count:number)=>(
            <List title={item.title}/>
        ))}
        <button onClick={()=>{setState(inputRef.current!.value)}}>add</button>
    </div>
  )
}

export default App