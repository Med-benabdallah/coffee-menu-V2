import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
export function DrinksScroll() {
  return (
    <div className="w-screen space-x-4 mt-4">
      <ScrollArea className="w-screen whitespace-nowrap">
        <div className="flex ">
          <Link href="/categories/drinks/coffee">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Coffee&co
            </div>
          </Link>
          <Link href="/categories/drinks/hot_drinks">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Hot Drinks
            </div>
          </Link>
          <Link href="/categories/drinks/cold_drinks">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              Cold Drinks
            </div>
          </Link>
          
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
