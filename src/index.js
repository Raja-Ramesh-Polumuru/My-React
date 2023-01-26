import ReactDom from "./ReactDom";
import React from "./React";
import { App } from "./App";

const root = document.getElementById("root");

ReactDom.render(
  <div className="Container">
    <h1>HelloWorld</h1>
    <p>This is My version of React</p>
    <App />
  </div>,
  root
);
