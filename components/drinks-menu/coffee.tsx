'use client'
 
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";

export function Coffee() {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-2xl">COFFEE & CO</h1>
      <Separator orientation="horizontal" className="w-20 h-1 bg-white" />
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Express</div>
        <div>2.9 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Americano</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cappucin</div>
        <div>3.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Café crème</div>
        <div>3.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Cappucino</div>
        <div>5.5 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chocolat au lait</div>
        <div>3.6 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Chantilly</div>
        <div>5.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Iced coffee</div>
        <div>6.0 DT</div>
      </div>
      <div className="flex mt-4 items-center justify-between text-xl">
        <div>Supplément Arome</div>
        <div>1.0 DT</div>
      </div>
      <div>(caramel ou vanille,...)</div>
    </div>
  );
}
