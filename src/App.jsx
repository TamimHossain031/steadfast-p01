import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import SingleProductPage from "./pages/SingleProductPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-bgDark pb-[23px]">
      <Router>
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleProduct/:id" element={<SingleProductPage />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
