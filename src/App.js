import React, { useEffect } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductRedux } from "./Redux/productSlice";
import Footer from "./Components/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetch("https://dummyjson.com/products");
      const pdata = await data.json();
      // console.log(pdata.products);
      dispatch(addProductRedux(pdata.products));
    })();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
