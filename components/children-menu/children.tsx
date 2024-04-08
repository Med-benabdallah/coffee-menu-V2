"use client";

import React from "react";
import { Separator } from "@radix-ui/react-separator";

export function Enfant() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">Menu Enfant</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Nuggets + Pate <br />+ Frite + Soda</div>
        <div>13.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Crepe <br />+ Frite + Soda</div>
        <div>13.0 DT</div>
      </div>
    </div>

  );
}
