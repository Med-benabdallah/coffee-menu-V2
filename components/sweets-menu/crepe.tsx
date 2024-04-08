'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Crepe() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Crêpe</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chocolat</div>
        <div>7.5 DT</div>
      </div>
      <div>(amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella</div>
        <div>9.0 DT</div>
      </div>
      <div>(amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella, Oreo</div>
        <div>11.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Speculoos</div>
        <div>10.5 DT</div>
      </div>
      
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Pistashio</div>
        <div>13.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Fruitose</div>
        <div>11.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>blanche neige</div>
        <div>9.5 DT</div>
      </div>
      <div>(Chocolat blanc, caramel, amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Black tag</div>
        <div>14.0 DT</div>
      </div>
      <div>(Chocolat blanc,Nutella, Chocolat noir, oreo, m&m&#39;s noisettes, amandes)</div>


    </div>
  );
}
