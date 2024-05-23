import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Products from "../Pages/Products"
import Login from "../Pages/Login"
import Cart from "../Pages/Cart"
export default function AllRoutes(){

    return <>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
}