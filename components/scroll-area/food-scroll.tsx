import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
export function FoodScroll() {
  return (
    <div className="w-screen space-x-4 mt-4">
      <ScrollArea className="w-screen whitespace-nowrap">
        <div className="flex ">
          <Link href="/categories/food/pizza">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Pizza
            </div>
          </Link>
          <Link href="/categories/food/sandwich">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Sandwich
            </div>
          </Link>
          <Link href="/categories/food/burger">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Burger
            </div>
          </Link>
          <Link href="/categories/food/crepe">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Crepe
            </div>
          </Link>
          <Link href="/categories/food/salades_et_omlette">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              salades et omlette
            </div>
          </Link>
          <Link href="/categories/food/plats">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Plats
            </div>
          </Link>
          <Link href="/categories/food/cheese_fries">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Cheese Fries
            </div>
          </Link>
          <Link href="/categories/food/pasta">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Pasta
            </div>
          </Link>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
