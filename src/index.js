import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './expo_pavilions.json'


// const DATA = [
//     { id: "pavilion-0", name: "Cyprus", completed: true },
//     { id: "pavilion-1", name: "Poland", completed: false },
//     { id: "pavilion-2", name: "Austria", completed: false }
// ];


ReactDOM.render(<App pavilions={data} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();