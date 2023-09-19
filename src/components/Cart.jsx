import React, { useState } from "react";
import { Link } from "react-scroll";
import { Turn as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";
import { products, total } from "../nanoStore.js";
import { useStore } from "@nanostores/react";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const productItems = useStore(products);
  const $total = useStore(total);
  return (
    <div className=" absolute right-0 h-screen bg-red-600 sm:w-[500px] w-full z-40 ">
      <div
        onClick={() => {
          setIsCartOpen(false);
        }}
        className=" absolute left-0 top-0 p-3"
      >
        X
      </div>
      {Object.values(productItems).map(({ keyNum, quantity }) => (
        <div key={keyNum}>
          {" "}
          <div>{quantity}</div>{" "}
        </div>
      ))}
      <div>Total:{$total.value}</div>
    </div>
  );
};
export default Cart;
