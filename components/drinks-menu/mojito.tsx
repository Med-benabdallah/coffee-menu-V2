'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Mojito() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Mojito</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Blue Mojito</div>
        <div>8.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Red Mojito</div>
        <div>8.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Mojito Frutos</div>
        <div>8.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Mojito Kiwi</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Virgin Mojito</div>
        <div>7.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div> Power Mojito</div>
        <div>13.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Space Mojito</div>
        <div>9.0 DT</div>
      </div>
    </div>
  );
}
