import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { HeaderComponet } from "./components/layout/header";
import { FooterComponet } from "./components/layout/footer";
import "./styles/base.css";
import {InputFindProviderGit, InputFindProviderRym} from "./components/provider/inputfind-context.provider";

ReactDOM.render(
  <>
  <HeaderComponet />
  <div className="content-app">
    <InputFindProviderGit>
      <InputFindProviderRym>
        <App />
      </InputFindProviderRym>
    </InputFindProviderGit>
  </div>
  < FooterComponet />
  </>,
  document.getElementById("root")
);
