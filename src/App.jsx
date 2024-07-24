import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
  </BrowserRouter>
    
  )
}

export default App