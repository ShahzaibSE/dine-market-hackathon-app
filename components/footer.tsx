import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto w-full max-w-screen-xl flex flex-wrap relative bottom-0 p-12 md:p-16">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col justify-start items-start gap-8">
          <div>
            <Image
              className="aspect-auto"
              alt="Dine Market logo"
              src="/assets/dine-market-logo.png"
              width={180}
              height={30}
            />
          </div>
          <div className="w-full md:w-2/4">
            <p className="leading-2 text-lg text-gray-500">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          </div>
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <Link href="#">
                <Twitter />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Facebook />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
