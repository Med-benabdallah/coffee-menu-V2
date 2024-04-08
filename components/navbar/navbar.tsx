import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import the Link component
import logo from "@/public/blacktag-logo.jpg";

export function Navbar() {
  return (
    <div className="bg-black">
      <nav className="flex items-center justify-center bg-black h-full shadow-md py-4">
        <div className="fixed left-3">
          <Link
            href="/categories"
            className=" flex flex-col justify-center items-center gap-3"
          >
            <Image
              src="/arrow.svg"
              alt="back button"
              width={40}
              height={40}
            />
          </Link>
        </div>

        <Image src={logo} alt="Blacktag" height={100} width={100} />
      </nav>
    </div>
  );
}
