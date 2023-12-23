import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderCard from "./components/Order/OrderCard";
import Order from "./components/Order/Order";
import OrderDetails from "./components/Order/OrderDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerRoute from "./Routers/CustomerRoute";
function App() {
  return (
    <div className="">
      <>
      <Cart></Cart>
        {/* <Routes>
          <Route path="/" element={<CustomerRoute></CustomerRoute>}></Route>
        </Routes> */}
      </>
    </div>
  );
}

export default App;
