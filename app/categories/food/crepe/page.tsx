import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { FoodScroll } from "@/components/scroll-area/food-scroll";
import { Crepe } from "@/components/food-menu/crepe";

const drinks = () => {
  return (
    <div className="bg-black h-screen overflow-scroll">
      <Navbar />
      <FoodScroll />
      <Crepe/></div>
  );
};

export default drinks;
