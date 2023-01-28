import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Category from "../components/Category";
import {useProductContext } from "../providers/Context";
import CartContainer from "../components/Card";
import BottomMenu from "../components/BottomMenu";
import Login from "../components/Login";
import Slide from "../components/Slide";
import Testimionals from "../components/Testimional";
import Footer from "../components/Footer";
export default function Body() {
  const {showCart}=useProductContext()
  return (
    <div>
      <Header />
      <BottomMenu/>
 {showCart===false ? null : <CartContainer/>}
<Login/>
 <Category />
      <Products />
    
    </div>
  );
}
