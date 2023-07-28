import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllProducts from "./pages/AllProducts";
import CategoryProducts from "./pages/CategoryProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import ScrollToTop from "./Layout/ScrollToTop";



function App() {

  return (
    <>
    <ScrollToTop>
     <Routes>
     <Route path="/" element={<Layout/>}>
        <Route path="" element={<AllProducts/>} />
        <Route path="category_product/:category_id" element={<CategoryProducts/>} />
        <Route path="product/:id" element={<SingleProduct/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
     </Routes>
     </ScrollToTop>

     <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

    </>  
  );
}

export default App;
