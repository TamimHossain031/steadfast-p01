import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Preloader = lazy(()=> import("./../components/Helpers/Preloader"));
const Footer = lazy(() => import("./../components/Footer"));
const Header = lazy(() => import("./../components/Header"));
const CursorMove = lazy(() => import("./../components/Helpers/CursorMove"));
const ScrollToTop = lazy(() => import("./../components/Helpers/ScrollToTop"));
const About = lazy(() => import("./../pages/About"));
const Blog = lazy(() => import("./../pages/Blog"));
const Checkout = lazy(() => import("./../pages/Checkout"));
const Contact = lazy(() => import("./../pages/Contact"));
const Home = lazy(() => import("./../pages/Home"));
const Product = lazy(() => import("./../pages/Product"));
const Shop = lazy(() => import("./../pages/Shop"));
const SingleProductPage = lazy(() => import("./../pages/SingleProductPage"));
const UserLogin = lazy(() => import("./../pages/UserLogin"));
export default function Layout() {
  return (
    <div className="bg-bgDark pb-[23px] max-w-[1440px] mx-auto overflow-x-hidden">
      <CursorMove />
      <Router>
        <Suspense fallback={<Preloader/>}>
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
        </Suspense>
      </Router>
    </div>
  );
}
