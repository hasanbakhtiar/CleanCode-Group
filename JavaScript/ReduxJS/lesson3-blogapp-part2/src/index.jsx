import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './manager/store/configureStore';
import App from './App';
import { Provider } from 'react-redux';
import './assets/bootstrap.min.css';
import { addBlog } from './manager/action./blogAction';
const  mystore = configureStore();




// mystore.subscribe(()=>{
//   console.log(mystore.getState());
// })
mystore.dispatch(addBlog({mytitle:"React",myauther:"Hasan"}))
mystore.dispatch(addBlog({mytitle:"redux",myauther:"Ferhad"}))
mystore.dispatch(addBlog({mytitle:"js",myauther:"Rana"}))
// mystore.dispatch(removeBlog({id:blog1.value.id}));




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={mystore}>
   <App/>
   </Provider>
  </React.StrictMode>
);

