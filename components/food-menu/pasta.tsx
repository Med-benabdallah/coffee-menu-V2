'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Pasta() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Pasta</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Rigatoni a la Romagnola</div>
        <div>15.0 DT</div>
      </div>
      <div>(viande hachée, champignon frais, crème fraîche , sauce tomate, Gruyère pesto)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Farfalle 4 Fromage</div>
        <div>13.5 DT</div>
      </div>
      <div>(Gruyère, Gorgonzola, parmesan, Camembert)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>tagliatelle a la <br /> creme sauce pesto</div>
        <div>12.0 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>bolognaise</div>
        <div>15.0 DT</div>
      </div>
    <div>(viande hachée, sauce tomate)</div>

    <h1 className="text-2xl mt-6">Nos Topping</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Parmesan</div>
        <div>3.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cheddar</div>
        <div>2.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Camembert</div>
        <div>4.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Champignon Frais</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Jambon de dinde</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Poulet</div>
        <div>5.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Viande hachée</div>
        <div>6.0 DT</div>
      </div>
 </div>
  );
}