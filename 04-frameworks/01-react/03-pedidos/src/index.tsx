import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import { HeaderComponet } from "./components/layout/header";
import { FooterComponet } from "./components/layout/footer";
import "./styles/styles.scss";
import {OrdersProvider, ModalProvider} from "./components/provider/orders-context.provider"


ReactDOM.render(
  <>
  <HeaderComponet />
  <div className="content-app">
    <div className="main-content">
      <OrdersProvider>
        <ModalProvider>
          <App/>
        </ModalProvider>
      </OrdersProvider>
    </div>
  </div>
  < FooterComponet />
  </>
    ,
  document.getElementById("root")
);


