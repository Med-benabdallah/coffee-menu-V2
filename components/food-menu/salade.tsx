'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Salad() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Salades</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>César</div>
        <div>13.0 DT</div>
      </div>
      <div>(Poulet Pané, Laitue, Tomates, Sauce César, Parmesan, Roquette, Fruits Secs)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Prestige</div>
        <div>15.0 DT</div>
      </div>
      <div>(Chapignons, Tomates, Boeuf Séché, Basillic, Tomate Cerise, Noix, Laitue, Sésame, Fromage Sicilien)</div>

      <h1 className="text-2xl mt-6">Omelete</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Thon Fromage</div>
        <div>7.0 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Jambon Fromage</div>
        <div>7.0 DT</div>
      </div>
    </div>
  );
}