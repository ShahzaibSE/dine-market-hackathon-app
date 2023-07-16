import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="mx-auto divide-y w-full max-w-screen-xl flex flex-wrap relative bottom-0 p-12 md:p-16">
      <div className="flex flex-col justify-evenly items-start gap-12 md:grid md:grid-cols-5 md:gap-10 my-8 md:my-10">
        <div className="flex flex-col justify-start items-start gap-8 md:col-span-2">
          <div>
            <Image
              className="aspect-auto"
              alt="Dine Market logo"
              src="/assets/dine-market-logo.png"
              width={180}
              height={30}
            />
          </div>
          <div className="w-full">
            <p className="leading-2 text-lg text-gray-500">
              Small, artisan label that offers a
              thoughtfully curated collection of
              high quality everyday essentials
              made.
            </p>
          </div>
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <Link href="https://twitter.com/ShahzaibNoor1" target="_blank">
                <Twitter />
              </Link>
            </div>
            <div>
              <Link href="https://web.facebook.com/shahzaib.noor.9/" target="_blank">
                <Facebook />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/shahzaib-noor-0a1b71b4" target="_blank">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          <div>
            <h3 className="text-xl text-gray-500 font-bold">
              Company
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  About
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Terms of Use
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Privacy Policy
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  How it Works
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          <div>
            <h3 className="text-xl text-gray-500 font-bold">
              Support
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Support Career
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  24th Service
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Quick Chat
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          <div>
            <h3 className="text-xl text-gray-500 font-bold">
              Contact
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  WhatsApp
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Support 24th
                </p>
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="text-gray-500 text-md">
                  Quick Chat
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-row md:grid-cols-6 gap-10 md:gap-32">
        <div className="md:col-span-2">
          <h3 className="text-lg text-gray-500">
            Copyright © 2022 Dine Market
          </h3>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-lg text-gray-500">
            Design by.{" "}
            <span className="font-bold text-black">
              Weird Design Studio
            </span>
          </h3>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-lg text-gray-500">
            Coded by.{" "}
            <span className="font-bold text-black">
              <Link href="https://github.com/ShahzaibSE">ShahzaibSE</Link> on Github
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
