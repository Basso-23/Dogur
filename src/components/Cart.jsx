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
    <div className=" absolute right-0 min-h-screen bg-red-600 sm:w-[500px] w-full z-40 overflow-y-auto">
      <div
        onClick={() => {
          setIsCartOpen(false);
        }}
        className=" absolute left-0 top-0 p-3 cursor-pointer text-xl purchaseBtn"
      >
        X
      </div>
      <div className="flex flex-col flex-wrap mt-4 mx-auto max-w-[400px]">
        {Object.values(productItems).map(({ keyNum, quantity, donut }) => (
          <div key={keyNum} className=" ">
            {quantity != 0 ? (
              <div className=" flex flex-col">
                <div className={`w-40 h-40 ${donut} mx-auto`}></div>
                <div className=" mx-auto mb-6">{quantity}</div>
              </div>
            ) : null}
          </div>
        ))}
        {$total.value != 0 ? (
          <div className=" flex">
            <div className=" mx-auto">Total: {$total.value}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Cart;
