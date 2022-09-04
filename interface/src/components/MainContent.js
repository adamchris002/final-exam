import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  FruitPage,
  CategoryPage,
  BrandPage,
  addPageBrand,
} from "../pages";

const MainContent = () => {
  return (
    <div className="body text-center m-3">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/fruits" element={<FruitPage></FruitPage>}></Route>
        <Route
          path="/categories"
          element={<CategoryPage></CategoryPage>}
        ></Route>
        <Route path="/brands" element={<BrandPage></BrandPage>}></Route>
        <Route
          path="/brands/add"
          element={<addPageBrand></addPageBrand>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
