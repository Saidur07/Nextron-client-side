import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import AllProducts from "./Pages/AllProducts/AllProducts";
import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProducts from "./Pages/MyProducts/MyProducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useEffect, useState } from "react";
import Loader from "./components/Shared/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Loader></Loader>
      <h1 className="text-5xl text-white tracking-widest animate-ping mt-6">
        Loading...
      </h1>
    </div>
  ) : (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <AllProducts></AllProducts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myproducts"
          element={
            <RequireAuth>
              <MyProducts></MyProducts>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
