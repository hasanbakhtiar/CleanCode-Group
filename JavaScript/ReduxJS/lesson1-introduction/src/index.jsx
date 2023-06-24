import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';




const initialState = {count:0}

const counterReducer = (state=initialState,action)=>{
  switch (action.type) {
    case "INCREMENT":
          return {count:state.count+ (typeof action.value === 'number' ? action.value:1)}
    case "DECREMENT":
      return {count:state.count-1}
    default:
      return state;
  }
}


const store = createStore(counterReducer);

  store.subscribe(()=>{
    console.log(store.getState());
  })


store.dispatch({
  type:"INCREMENT",
  value:30
})

store.dispatch({
  type:"DECREMENT",

})

store.dispatch({
  type:"DECREMENT",

})

store.dispatch({
  type:"DECREMENT",

})

store.dispatch({
  type:"INCREMENT",
  value:100
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello Redux</h1>
  </React.StrictMode>
);

