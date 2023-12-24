import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Cart from "../components/Cart/Cart";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import Order from "../components/Order/Order";
import OrderDetails from "../components/Order/OrderDetails";

export default function CustomerRoute() {
  return (
    <div>
      <div>
        <Navigation></Navigation>
      </div>
      
        <Routes>
          <Route path="*" element={<HomePage></HomePage>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route
            path="/checkout"
            element={<Checkout></Checkout>}
          ></Route>
          <Route
            path="/account/order"
            element={<Order></Order>}
          ></Route>
          <Route
            path="/account/order/:orderId"
            element={<OrderDetails></OrderDetails>}
          ></Route>
          
        </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
