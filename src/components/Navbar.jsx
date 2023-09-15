import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <div
      class={
        scroll
          ? "w-full h-[70px] flex font-medium fixed z-50 transition-all bg-[#eeefe9]"
          : "w-full h-[70px] flex font-medium fixed z-50 transition-all glass shadow-xl"
      }
    >
      <div class="m-auto flex max-w-[1800px] w-full relative">
        {/* LEFT CONTENT----------------------------------------------- */}
        <div class="my-auto text-[#313d47] text-[min(6vw,30px)] absolute left-0 fixedCenterY sm:pl-10 pl-3 font-bold tracking-tight">
          DOGUR
        </div>
        {/* HIDDEN AFTER XL----------------------------------------------- */}
        <div class="xl:flex hidden">
          {/* MIDDLE CONTENT----------------------------------------------- */}
          <div class="flex text-[min(4.5vw,16.5px)] gap-20 text-[#151a1e] absolute fixedCenterXnY">
            <div class="my-auto cursor-pointer">Catalogue</div>
            <div class="my-auto cursor-pointer">About</div>
            <div class="my-auto cursor-pointer">Testimonial</div>
          </div>

          {/* RIGHT CONTENT----------------------------------------------- */}
          <div class="flex text-[min(4.5vw,20px)] gap-[45px] absolute right-0 fixedCenterY sm:pr-10 pr-3">
            <div class="my-auto flex text-[min(4.5vw,15px)]">
              <div>USD</div>
              <div>$</div>
              {/* DOWN ICON----------------------------------------------- */}
              <div class="my-auto ml-1">
                <BsChevronDown />
              </div>
            </div>
            {/* SEARCH ICON----------------------------------------------- */}
            <div class="my-auto">
              <BiSearch />
            </div>
            {/* BAG ICON----------------------------------------------- */}
            <div class="my-auto">
              <HiOutlineShoppingBag />
            </div>
            {/* LOGIN BUTTON----------------------------------------------- */}
            <div class="text-[min(3.5vw,15px)] flex text-white">
              <div class="bg-[#9959d0] py-2 px-7 rounded-full cursor-pointer">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
