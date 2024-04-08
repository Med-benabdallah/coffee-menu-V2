'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Pizza() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Pizza</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Napolitaine</div>
        <div>12.0 DT</div>
      </div>
      <div>(Sauce tomate, Fromage, basillic, Sauce Piaquante)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Al tonno </div>
        <div>16.0 DT</div>
      </div>
      <div>(Sauce tomate, Mozzarella, Thon, Pesto, olive noir, Câpre)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Pepperoni</div>
        <div>16.0 DT</div>
      </div>
      <div>(Sauce tomate, Mozzarella, Olive noir, Pepperoni, Piment de cayenne)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Burrata</div>
        <div>25.0 DT</div>
      </div>
      <div>(Sauce blanche, Mozzarella, Jambon fumé, Burrata cerise, Tomate cerise, Roquette, Pesto, Ricotta)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>5 Cheese</div>
        <div>18.5 DT</div>
      </div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Végetarienne</div>
        <div>16.0 DT</div>
      </div>
      <div>(Sauce tomate, Mozzarella, Courgette, Aubergine, Champignons frais, Tomate cerise, Roquette, Pesto, Poivron, épinard )</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Fruits de mer</div>
        <div>29.0 DT</div>
      </div>
      <div>(Sauce tomate, Mozzarella, Chevrette, Calamar, Moule, Crevette, Tomate séchée, Basillic, Olive noir)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Black</div>
        <div>23.0 DT</div>
      </div>
      <div>(Sauce tomate, Fromage, Légumes, thon, Pepperoni, Poulet, Chevrette)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Ricotta épinard</div>
        <div>17.0 DT</div>
      </div>
      <div>(Sauce blanche, Mozzarella, épinard, Ricotta, Olive)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Régina</div>
        <div>16.0 DT</div>
      </div>
      <div>(Sauce tomate, Mozzarella, Jambon fumé et de dinde)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>4 Saisons</div>
        <div>17.0 DT</div>
      </div>
      <div>(Sauce tomate, Fromage, légumes, Jambon, Roquette)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Bresola</div>
        <div>19.0 DT</div>
      </div>
      <div>(Sauce tomate, Mozzarella, Burrata cerise, Champigons, Bresola, Roquette)</div>
<div className="flex mt-4 items-center justify-between text-xl">
        <div>Bianca</div>
        <div>19.0 DT</div>
      </div>
      <div>(Sauce Blanche, Champignons, Thon, Basillic, Tomate cerise, Sauce Piquante)</div>


 </div>
  );
}