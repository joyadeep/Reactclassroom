import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllProducts from "./pages/AllProducts";



function App() {

  return (
    <>
     <Routes>
     <Route path="/" element={<Layout/>}>
        <Route path="" element={<AllProducts/>} />
      </Route>
     </Routes>
    </>  
  );
}

export default App;
