'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Sandwich() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Tacos/Pain brioche</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Poulet pané</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Poulet grillés</div>
        <div>8.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chawarma</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cordon Bleu</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Escalope S.Blanche</div>
        <div>9.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Mexican</div>
        <div>10.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Special Black</div>
        <div>12.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Double tacos le maxi</div>
        <div>14.0 DT</div>
      </div>
      <h1 className="text-2xl mt-10">Baguette farcie/ Makloub/Cornet/Panuozzo</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Poulet pane</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Poulet Grilles</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chawarma</div>
        <div>9.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cordon Bleu</div>
        <div>9.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Escalope S.Blanche</div>
        <div>10 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Mexican</div>
        <div>11 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Special Black</div>
        <div>13 DT</div>
      </div>
      <h1 className="text-2xl mt-10">supplement</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
      <div>Champignion/ <br />
            cheddar/Raclette</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>oeuf</div>
        <div>1.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Mozzarella</div>
        <div>2.0 DT</div>
      </div>
    </div>


    
  );
}