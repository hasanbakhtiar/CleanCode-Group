import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './manager/store/configureStore';
import App from './App';
import { Provider } from 'react-redux';
const  mystore = configureStore();



const myaction = ({mytitle,myauther})=>({
  type:"ADD_BLOG",
  value:{
    id:crypto.randomUUID(),
    title:mytitle,
    auther:myauther
  }
})


mystore.dispatch(myaction({mytitle:"React",myauther:"Hasan"}))
mystore.dispatch(myaction({mytitle:"redux",myauther:"Ferhad"}))
mystore.dispatch(myaction({mytitle:"js",myauther:"Rana"}))

console.log(mystore.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={mystore}>
   <App/>
   </Provider>
  </React.StrictMode>
);

