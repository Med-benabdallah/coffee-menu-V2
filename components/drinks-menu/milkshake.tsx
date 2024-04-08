'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Milkshake() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Milk Shake</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Oreo/Kinder/Twix/ <br /> Snikers/Kitkat/Nutella</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella Banane</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella Banane Oreo</div>
        <div>9.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Red</div>
        <div>8.5 DT</div>
      </div>
    </div>
  );
}
