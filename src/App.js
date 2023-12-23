import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderCard from './components/Order/OrderCard';
import Order from './components/Order/Order';
function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div>
        {/* <HomePage></HomePage> */}
        {/* <Product></Product> */}
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart></Cart> */}
        {/* <Checkout></Checkout> */}
        <Order></Order>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
