import "./App.css";
import React, { Suspense } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../src/Components/cart";
// import ProductList from "./Components/ProductList";
import FetchProduct from "../src/Components/FetchProducts";
import SearchData from "./Components/SearchData";
import Login from "./Components/ProductItem";
import Post from "./Components/Post";
// import { addToCart } from "./Redux/Actions/CartAction";
// import { useDispatch } from "react-redux";
const LazyList = React.lazy(() => import("../src/Components/ProductList"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="....products">
                <LazyList />
              </Suspense>
            }
          ></Route>
          <Route path="/product/:productId" element={<FetchProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search" element={<SearchData/>}></Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/postData" element={<Post/>}>post</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
