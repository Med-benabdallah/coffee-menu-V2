'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Frappuccino() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Frappuccino</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Caramel</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Tiramisu</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cookies</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Milka</div>
        <div>8.5 DT</div>
      </div>
    </div>
  );
}
