import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { HeaderComponet } from "./component/header";
import { FooterComponet } from "./component/footer";
import {InputFindProvider} from "./component/inputfind-context.provider";
import "./base.css";

ReactDOM.render(
  <>
  <HeaderComponet />
  <div className="content-app">
    <InputFindProvider>
      <App />
    </InputFindProvider>
  </div>
  < FooterComponet />
  </>,
  document.getElementById("root")
);
