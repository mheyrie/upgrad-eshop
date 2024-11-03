import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;