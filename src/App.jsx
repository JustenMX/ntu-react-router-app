/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
//
import { productData } from "./data/productData";
//
import HomePage from "./routes/HomePage";
import ViewProduct from "./routes/ViewProduct";
import DefaultProductDetails from "./routes/DefaultProductDetails";
import ProductDetails from "./routes/ProductDetails";
import AddProduct from "./routes/AddProduct";
import ErrorPage from "./routes/ErrorPage";

function App() {
  const [cartList, setCartList] = useState(productData);
  //
  const handlerDeleteProduct = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="view" element={<ViewProduct cartList={cartList} />}>
            <Route index element={<DefaultProductDetails />} />
            <Route
              path=":id"
              element={
                <ProductDetails
                  cartList={cartList}
                  handlerDeleteProduct={handlerDeleteProduct}
                />
              }
            />
          </Route>
          <Route path="add" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
