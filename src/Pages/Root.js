import React from "react";
import { Routes, Route } from "react-router-dom";
import PagesForm from "./Promotion/Form/Form";
import PagesPromotionSearch from "./Promotion/Search";





const Root = () => {
    return (
        
      <Routes>

            <Route path="/" element={<PagesPromotionSearch></PagesPromotionSearch>}></Route>
            <Route path="/create" element={<PagesForm></PagesForm>}></Route>
            <Route path="/edit/:id" element={<PagesForm></PagesForm>}></Route>
            
      </Routes>
           
        
    );
};

export default Root;