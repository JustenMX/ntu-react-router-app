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
  const [editItem, setEditItem] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  // Delete Product
  const handlerDeleteProduct = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };
  // Edit Product
  const handlerEditProduct = (id) => {
    const newCartList = cartList.find((item) => item.id === id);
    setEditItem(newCartList);
    setIsEditing(true);
    console.log(editItem);
  };
  // Cancel Edit
  const handlerCancelEdit = () => {
    setIsEditing(false);
  };

  // Handler Edit Name
  const handlerEditName = (value) => {
    setEditItem({
      ...editItem,
      name: value,
    });
  };

  // Handler Edit Price
  const handlerEditPrice = (value) => {
    setEditItem({
      ...editItem,
      price: +value,
    });
  };

  // Handler Edit Quantity
  const handlerEditQuantity = (value) => {
    setEditItem({
      ...editItem,
      quantity: +value,
    });
  };

  // Handler Edit Discount
  const handlerEditDiscount = (value) => {
    setEditItem({
      ...editItem,
      discount: +value,
    });
  };

  console.log(editItem);

  // Handler Edit Submit
  const handlerEditSubmit = () => {
    const newList = cartList.map((item) => {
      if (item.id === editItem.id) {
        return {
          ...item,
          name: editItem.name,
          price: editItem.price,
          quantity: editItem.quantity,
          discount: editItem.discount,
        };
      }
      return item;
    });
    setCartList(newList);
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
                  handlerEditProduct={handlerEditProduct}
                  handlerCancelEdit={handlerCancelEdit}
                  handlerEditName={handlerEditName}
                  handlerEditPrice={handlerEditPrice}
                  handlerEditQuantity={handlerEditQuantity}
                  handlerEditDiscount={handlerEditDiscount}
                  handlerEditSubmit={handlerEditSubmit}
                  editItem={editItem}
                  isEditing={isEditing}
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
