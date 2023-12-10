import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { HashRouter as BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { listData } from "./Redux/Reducers";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(listData);

export const getDateInFormat= (date)=>{
  
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
