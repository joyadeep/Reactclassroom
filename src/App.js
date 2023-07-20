import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllProducts from "./pages/AllProducts";
import CategoryProducts from "./pages/CategoryProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";



function App() {

  return (
    <>
     <Routes>
     <Route path="/" element={<Layout/>}>
        <Route path="" element={<AllProducts/>} />
        <Route path="category_product/:category_id" element={<CategoryProducts/>} />
        <Route path="product/:id" element={<SingleProduct/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
     </Routes>
    </>  
  );
}

export default App;
