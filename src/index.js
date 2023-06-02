import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogData = [
  {name: "Valeria", id: 1},
  {name: "Lidia", id: 2},
  {name: "Sergey", id: 3},
  {name: "Roman", id: 4},
  {name: "Valera", id: 5}
]
let messageData = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Good job!"}
]
let postData = [
  {id: 1, message: "Hello, World!", likesCount: 15},
  {id: 2, message: "It's my first post", likesCount: 20}
]

root.render(
  <React.StrictMode>
    <App dialogData ={dialogData} messageData={messageData} postData={postData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
