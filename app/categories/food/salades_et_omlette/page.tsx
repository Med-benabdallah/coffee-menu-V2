import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { FoodScroll } from "@/components/scroll-area/food-scroll";
import { Salad } from "@/components/food-menu/salade";

const drinks = () => {
  return (
    <div className="bg-black h-screen overflow-scroll">
      <Navbar />
      <FoodScroll />
      <Salad/> </div>
  );
};

export default drinks;
