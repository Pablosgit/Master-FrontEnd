import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import {Cart} from "./components/layout/cart"
import { HeaderComponet } from "./components/layout/header";
import { FooterComponet } from "./components/layout/footer";
import {KittiesProvider} from "./components/provider/pictureInfo-context.provider"
import {MenuUser} from "./components/layout/menu.user"
import "./styles/styles.scss";


ReactDOM.render(
  <>
  <HeaderComponet />
  <KittiesProvider>
  <MenuUser />
  <div className="content-app">
    <div className="main-content">
        <App/>
        <Cart/>
    </div>
  </div>
  </KittiesProvider>
  < FooterComponet />
  </>
    ,
  document.getElementById("root")
);


