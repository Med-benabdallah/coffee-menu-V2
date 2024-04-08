'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function CheeseFries() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Cheese Fries</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nature</div>
        <div>7.0 DT</div>
      </div>
      <div>(Frites, Fromages, Sauce Fromagère)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Pepperone</div>
        <div>8.0 DT</div>
      </div>
      <div>(Frites, Pepperone, Fromages, Sauce Fromagère)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Chicken</div>
        <div>8.5 DT</div>
      </div>
      <div>(Frites, Poulet, Fromages, Sauce Fromagère)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Mexicain</div>
        <div>9.5 DT</div>
    </div>
    <div>(Frites, Viande Hachée, Fromages, Sauce Fromagère, Légumes à la mexicaine)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Cheese Fries Cordon Bleu</div>
        <div>9.0 DT</div>
      </div>
      <div>(Frites, Fromages, Sauce Fromagère, Oignons, Cordon Bleu)</div>
    </div>
  );
}