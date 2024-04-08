'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Crepe() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">crepe salee</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Thon</div>
        <div>8.5 DT</div>
      </div>
      <div>(thon, fromage)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Regina</div>
        <div>8.0 DT</div>
      </div>
      <div>(jambon, fromage)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>fejitas</div>
        <div>9.0 DT</div>
      </div>
      <div>(poulet ou viande hachée, legume a la mexicaine)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>4 fromages</div>
        <div>12.0 DT</div>
    </div>
    <div>(mozzarella, cheddar, roquefort, parmesan)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>vegetarienne</div>
        <div>8.0 DT</div>
      </div>
      <div>(légumes sautés, roquette, Gruyère)</div>
    </div>
  );
}