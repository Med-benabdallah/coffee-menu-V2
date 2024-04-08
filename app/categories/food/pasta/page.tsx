import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { FoodScroll } from "@/components/scroll-area/food-scroll";
import { Pasta } from "@/components/food-menu/pasta";

const drinks = () => {
  return (
    <div className="bg-black h-screen overflow-scroll">
      <Navbar />
      <FoodScroll />
      <Pasta/></div>
  );
};

export default drinks;
