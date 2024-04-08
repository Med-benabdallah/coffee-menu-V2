'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Pancake() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Pancake</h1>
      <h3>(5 niveaux)</h3>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chocolat</div>
        <div>8.5 DT</div>
      </div>
      <div>(amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella</div>
        <div>10 DT</div>
      </div>
      <div>(amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella, Oreo</div>
        <div>12 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Speculoos</div>
        <div>11.5 DT</div>
      </div>
      
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Pistashio</div>
        <div>15.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Fruitose</div>
        <div>11.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>blanche neige</div>
        <div>10.5 DT</div>
      </div>
      <div>(Chocolat blanc, caramel, amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Black tag</div>
        <div>15 DT</div>
      </div>
      <div>(Chocolat blanc,Nutella, Chocolat noir, oreo, m&m&#39;s noisettes, amandes)</div>

      <h1 className="text-2xl pt-8">Pancake</h1>
      <h3>(3 niveaux)</h3>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" /> 
    <div className="flex mt-4 items-center justify-between text-xl">
        <div>chocolat</div>
        <div>5 DT</div>
      </div>

      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella</div>
        <div>6.5 DT</div>
      </div>
    </div>
  );
}
