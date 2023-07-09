import {Routes,Route} from 'react-router-dom'
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import CategoryProduct from "./pages/CategoryProduct";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import Layout from './Layout/Layout';
import "react-loading-skeleton/dist/skeleton.css"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<AllProducts/>} />
        <Route path='category_products/:category' element={<CategoryProduct/>} />
        <Route path='product/:id' element={<SingleProduct/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>

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
