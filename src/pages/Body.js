import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Category from "../components/Category";
import {useProductContext } from "../providers/Context";
import CartContainer from "../components/Card";
import BottomMenu from "../components/BottomMenu";
import Login from "./Login";
import Slide from "../components/Slide";
export default function Body() {
  const {showCart}=useProductContext()
  return (
    <div>
      <Header />
      <Slide/>
      <BottomMenu/>
 {showCart===false ? null : <CartContainer/>}
 <Category />
      <Products />
    </div>
  );
}
