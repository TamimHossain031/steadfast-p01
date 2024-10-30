import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
function App() {
  return(
      <div className='bg-bgDark pb-1.5'>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/blog' element={<Blog/>} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;
