import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./../components/Footer";
import Header from "./../components/Header";
import CursorMove from "./../components/Helpers/CursorMove";
import ScrollToTop from "./../components/Helpers/ScrollToTop";
import About from "./../pages/About";
import Blog from "./../pages/Blog";
import Checkout from "./../pages/Checkout";
import Contact from "./../pages/Contact";
import Home from "./../pages/Home";
import Product from "./../pages/Product";
import Shop from "./../pages/Shop";
import SingleProductPage from "./../pages/SingleProductPage";
import UserLogin from "./../pages/UserLogin";
export default function Layout() {
  return (
    <div className="bg-bgDark pb-[23px] max-w-[1440px] mx-auto overflow-x-hidden">
      <CursorMove />
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleProduct/:id" element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
