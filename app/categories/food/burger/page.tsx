import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { FoodScroll } from "@/components/scroll-area/food-scroll";
import { Burger } from "@/components/food-menu/burger";

const drinks = () => {
  return (
    <div className="bg-black h-screen overflow-scroll">
      <Navbar />
      <FoodScroll />
      <Burger/></div>
  );
};

export default drinks;
