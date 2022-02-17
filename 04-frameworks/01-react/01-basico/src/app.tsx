import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LoginPage } from "./components/pages/login/login";
import { ListPage } from "./components/pages/list-github/list";
import { DetailPage } from "./components/pages/list-github/detail";
import { IndicePage } from "./components/pages/indice/indice"
import { ListPageMyR } from "./components/pages/list-rickymorty/list-rym";
import { DetailPageMyR } from "./components/pages/list-rickymorty/detail-rym";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/indice" element={<IndicePage />}  />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/list-rym" element={<ListPageMyR />} />
        <Route path="/detail-rym/:id" element={<DetailPageMyR />} />
      </Routes>
    </Router>
  );
};
