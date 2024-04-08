'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Soda() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Boissons</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Soda</div>
        <div>4.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Eau 1.5</div>
        <div>2.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Eau 0.5</div>
        <div>1.9 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>GARCI</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Shark</div>
        <div>10.0 DT</div>
      </div>
    </div>
  );
}
