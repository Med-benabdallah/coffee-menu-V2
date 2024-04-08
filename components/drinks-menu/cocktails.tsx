'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Cocktails() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Cocktails</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Jus d&#39;orange</div>
        <div>6.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Citronnade</div>
        <div>6.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Pina Colada</div>
        <div>8.5 DT</div>
      </div>
      <div>(Ananas, noix de coco, creme,
        <br />sirop)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>After Glow</div>
        <div>8.0 DT</div>
      </div>
      <div>(grenadine, sirop, orange, <br />ananas)</div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Calada punch</div>
        <div>8.0 DT</div>
      </div>
      <div>(menthe frais, banane, <br />glace, orange, ananas)</div>
    </div>
  );
}
