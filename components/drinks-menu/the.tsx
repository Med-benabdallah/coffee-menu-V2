'use client'
 
import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Tea() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Tea</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Thé à la menthe</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>thé infusion</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>thé aux amandes</div>
        <div>8.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>thé aux pignons</div>
        <div>8.5 DT</div>
      </div>
    </div>
  );
}
