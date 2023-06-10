import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addNewPost, updateNewPostText, addNewMessage, updateNewMessageText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addNewPost={addNewPost}
          updateNewPostText={updateNewPostText}
          addNewMessage={addNewMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
