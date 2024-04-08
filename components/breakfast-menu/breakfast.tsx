"use client";

import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Breakfast() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Breakfast</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Simple</div>
        <div>7.0 DT</div>
      </div>
      <div>(Café au choix, croissant, jus)</div>

      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Black</div>
        <div>13.0 DT</div>
      </div>
      <div>(Café au choix, croissant, jus, omelette, salade, beurre, chocolat, confiture, toast, miel, fromage, jambon de dinde)</div>

      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Le parfait</div>
        <div>18.0 DT</div>
      </div>
      <div>(Café au choix, croissant, jus, omelette, salade, beurre, chocolat, confiture, toast, miel, 2 fromage, jambon de dinde, mini paincake, ricotta, Nuggets, camembert, 3 assortiment de jambon, peperoni)</div>

      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Le couple</div>
        <div>30.0 DT</div>
      </div>
      <div>(2 Café au choix, 2 viennoiseries, 2 jus, omelette, salade, beurre, chocolat, confiture, toast, miel, 3 fromage, jambon de dinde, mini paincake, ricotta, Nuggets, camembert, 3 assortiment de jambon, peperoni, charcuterie)</div>


     
    </div>

  );
}
