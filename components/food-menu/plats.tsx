'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Plats() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Plats</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Émincé de Poulet</div>
        <div>17.0 DT</div>
      </div>
      <div>(4 Fromages et Champignons)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Cordon Bleu</div>
        <div>18.0 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Suprême de Poulet gratinée aux épinard</div>
        <div>18.0 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Escalope de Poulet Grillé</div>
        <div>15.0 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Poulet Pané Gratiné</div>
        <div>17.0 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Le Carnivore</div>
        <div>22.0 DT</div>
      </div>
      <div>(Filet 2 sauces)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Chicken Addiction</div>
        <div>30.0 DT</div>
      </div>
      <div><div>2 personnes</div>(Cordon bleu, Nuggets, Pate, Frites, Poulet Pané, émincé, Salade)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Chicken Addiction</div>
        <div>17.0 DT</div>
      </div>
      <div>(1 Cordon bleu, 3 Nuggets, Frites, 2 Poulet Pané, émincé, Salade)</div>


 </div>
  );
}