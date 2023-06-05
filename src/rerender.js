import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addNewPost } from './redux/state';


export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  debugger
  root.render(
    <React.StrictMode>
      <App state ={state} addNewPost={addNewPost} />
    </React.StrictMode>
  );
}