import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { FoodScroll } from "@/components/scroll-area/food-scroll";
import { Pizza } from "@/components/food-menu/pizza";

const drinks = () => {
  return (
    <div className="bg-black h-screen overflow-scroll">
      <Navbar />
      <FoodScroll />
      <Pizza/></div>
  );
};

export default drinks;
