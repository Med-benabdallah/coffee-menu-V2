'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Gaufre() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Gaufre</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chocolat Amandes</div>
        <div>7.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chocolat Nutella</div>
        <div>9.0 DT</div>
      </div>
      <div>(Nutella, Amandes)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella Banane</div>
        <div>11.0 DT</div>
      </div>
      <div>(Nutella, Banane, Noisette)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Childhood</div>
        <div>8.0 DT</div>
      </div>
      <div>(M&M&#39;s, chantilly, glace, Nutella)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Trio de chocolat</div>
        <div>8.0 DT</div>
      </div>
      <div>(Chocolat blanc, chocolat noir, Nutella)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Gate</div>
        <div>9.0 DT</div>
      </div>
      <div>(oreo, vanille, glace, chantilly)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Black tag</div>
        <div>14.0 DT</div>
      </div>
      <div>(Nutella, Chocolat blanc, oreo, amandes, noisette,M&M&#39;s, mousseline)</div>
    </div>
  );
}
