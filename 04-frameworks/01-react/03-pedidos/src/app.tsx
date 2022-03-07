import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  {OrdersListPage} from "./components/pages/orderslist"
import  {OrdersDetailPage} from "./components/pages/ordersdetail"


export const App = () => {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<OrdersListPage />}  />
          <Route path="/ordersdetail" element={<OrdersDetailPage />} />
        </Routes>
      </Router>
    );
}