import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { DrinksScroll } from "@/components/scroll-area/drinks-scroll";
import { Frappuccino } from "@/components/drinks-menu/frappuccino";
import { Smoothies } from "@/components/drinks-menu/smoothies";
import { Soda } from "@/components/drinks-menu/soda";
import { Cocktails } from "@/components/drinks-menu/cocktails";
import { Mojito } from "@/components/drinks-menu/mojito";
import { Milkshake } from "@/components/drinks-menu/milkshake";

const drinks = () => {
  return (
    <div className="bg-black h-screen overflow-scroll">
      <Navbar />
      <DrinksScroll />
      <Frappuccino />
      <Smoothies />
      <Soda />
      <Cocktails />
      <Mojito />
      <Milkshake/></div>
  );
};

export default drinks;
