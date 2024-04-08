'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function HotChocolate() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Hot Chocolate</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Simple</div>
        <div>6.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nutella</div>
        <div>7.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Caramel/Noisette</div>
        <div>6.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Framboise</div>
        <div>6.5 DT</div>
      </div>
    </div>
  );
}
