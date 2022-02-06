import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { IndicePage } from "./indice"
import { ListPageMyR } from "./list-rym";
import { DetailPageMyR } from "./detail-rym";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/indice" element={<IndicePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/list-rym" element={<ListPageMyR />} />
        <Route path="/detail-rym/:id" element={<DetailPageMyR />} />
      </Routes>
    </Router>
  );
};
