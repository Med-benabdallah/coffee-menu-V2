"use client";

import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Burger() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Burger</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Le Classique</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
      </div>
      <div className="flex mt-4 items-center justify-end text-xl">
       
        <div className="mr-5">13.0</div>
        <div className="mx-3">17.0</div>
        <div className="ml-5">22.0</div>
      </div>
      <div>
        (viande hachée, oignions, Tomates, roquette, ketchup, mayonnaise, Sauce fromagère, cheddar,laitue)
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Le Black</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
      </div>
      <div className="flex mt-4 items-center justify-end text-xl">
       
       <div className="mr-5">12.0</div>
       <div className="mx-6">15.0</div>
       <div className="ml-5">18.0</div>
     </div>
      <div>
        (poulet, Tomates, oignions caramélisé, Laitue, cheddar, mayonnaise, chili)
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Mixte</div>
        <div>16.0 DT</div>
      </div>
      <div>(viande hachée, poulet pane, laitue, tomate, cheddar)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Burger plus</div>
        <div>16.0 DT</div>
      </div>
      <div>(viande hachée, bresaola, laitue, tomate, cheddar, ognion caramélisé)</div>

      <div className="flex mt-4 items-center justify-between text-xl">
        <div>supplement oeuf</div>
        <div>1.0 DT</div>
      </div>
    </div>

  );
}
