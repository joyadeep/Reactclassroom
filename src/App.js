import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import CategoryProduct from "./pages/CategoryProduct";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";

function App() {

  return (
    <>
    <Navbar/>
    <AllProducts/>
    <SingleProduct/>
    <CategoryProduct/>
    <Cart/>
    <Checkout/>
    </>
  );
}

export default App;
