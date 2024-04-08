import Image from "next/image";
import { Button } from "@/components/ui/button"

import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-black p-5 h-full">
      <div className="flex flex-col justify-center items-center gap-10 align-middle h-full">
        <Image src="/blacktag-logo.jpg" alt="black-tag logo" width={250} height={250} />
        <Link href="/categories" ><Button className="bg-slate-50 text-black w-60 h-20 text-xl font-semibold" variant="outline">Voir Menu</Button></Link>

      </div>
    </div>
    
   );
}
