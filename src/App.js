import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import CategoryProduct from "./pages/CategoryProduct";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import Layout from './Layout/Layout';

function App() {

  return (
      
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<AllProducts/>} />
        <Route path='category_products/:category' element={<CategoryProduct/>} />
        <Route path='product/:id' element={<SingleProduct/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
      
  );
}

export default App;
