import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllProducts from "./pages/AllProducts";
import CategoryProducts from "./pages/CategoryProducts";
import SingleProduct from "./pages/SingleProduct";



function App() {

  return (
    <>
     <Routes>
     <Route path="/" element={<Layout/>}>
        <Route path="" element={<AllProducts/>} />
        <Route path="category_product/:category_id" element={<CategoryProducts/>} />
        <Route path="product/:id" element={<SingleProduct/>} />
      </Route>
     </Routes>
    </>  
  );
}

export default App;
