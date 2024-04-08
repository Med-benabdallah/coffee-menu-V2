import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
export function SweetsScroll() {
  return (
    <div className="w-screen space-x-4 mt-4">
      <ScrollArea className="w-screen whitespace-nowrap">
        <div className="flex">
          
          <Link href="/categories/sweets/crepe">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              CREPE
            </div>
          </Link>
          <Link href="/categories/sweets/pancake">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              PANCAKE
            </div>
          </Link>
          <Link href="/categories/sweets/gaufre">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              GAUFRE
            </div>
          </Link>
          <Link href="/categories/sweets/patisserie">
            <div className="min-w-28 h-20 flex items-center p-2  text-xl font-semibold border-2 border-white justify-center rounded-md mx-1">
              PATISSERIE
            </div>
          </Link>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
