import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Home from './pages/Home'
import About from './pages/About'
import CreatePost from "./pages/CreatePost";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "./context/ThemeContext";
const App = () => {
  const {isDark}=useContext(ThemeContext)
  return (
    <div className={isDark?"app_dark":"app_light"}>
    
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="" element={<Home/>} />
        <Route path="blogs" element={<AllPosts/>} />
        <Route path="/:id" element={<SinglePost/>}  />
        <Route path="about" element={<About/>}  />
        <Route path="create" element={<CreatePost/>}  />
      </Route>
    </Routes>




<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  );
};

export default App;
