import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  {KittiesPage} from "./components/pages/kitties/kitties"
import  {PuppiesPage} from "./components/pages/puppies/puppies"
import {CategoryPage} from "./components/pages/indice/category"


export const App = () => {
    return(
        <Router>
        <Routes>
          <Route path="/" element={<CategoryPage />}  />
          <Route path="/kitties" element={<KittiesPage />} />
          <Route path="/puppies" element={<PuppiesPage />}  />
        </Routes>
      </Router>
    );
}