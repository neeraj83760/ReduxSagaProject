import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './Redux/store';
import {BrowserRouter} from 'react-router-dom'

console.warn(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // jab bhi hum provider dete hai to hum store naam ka props bhi pass karna hota hai 
  // tabhi provider wrapper work karega so store ko props ki tarah pass karne 
  // ke liye pehele aapko store banana padega  

  // Provider ka kaam react to reduxJs se connect karna 
    <Provider store={store}>
   <BrowserRouter> 
   <App />
   </BrowserRouter>
    </Provider>
  
);

//
//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
