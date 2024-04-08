'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Patisserie() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Patisserie</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Fondant chocolat</div>
        <div>8.0 DT</div>
      </div>
      <div>(Home made)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chesse Cake</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Croissant</div>
        <div>2.2 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>CheeseCake <br />Saint-Sebastien + <br /> Cafe + chatilly</div>
        <div>15.0 DT</div>
      </div>
    </div>
  );
}
