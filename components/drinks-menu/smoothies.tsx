'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Smoothies() {
  return (
    <div className="flex flex-col m-8 bg-black">
      <h1 className="text-2xl">Smoothies</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Banane, Nutella</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Myrtille, Framboise, Fraise </div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Fraise,Banane</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Kiwi ,Banane</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Speculose</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cocktail Black Tag</div>
        <div>12.0 DT</div>
      </div>
    </div>
  );
}
