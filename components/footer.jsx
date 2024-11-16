import Image from "next/image";
import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5">
            <Logo className="mb-5 w-36" />
            <p className="mb-5 text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, nesciunt?
            </p>
            <Button>
              <PhoneIcon width={24} height={24} />
              Contact Us
            </Button>
          </div>
          <div className="col-span-7 flex justify-between gap-20 [&>div]:flex-1">
            <div>
              <h1 className="mb-5 text-xl font-semibold">Alamat</h1>
              <p className="mb-5 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, maxime!
              </p>
              <h1 className="mb-5 text-xl font-semibold">Social Media</h1>
              <div className="flex gap-2 [&>img]:rounded">
                <Image width={30} height={30} alt="logo" src={"/logo-facebook.png"} />
                <Image width={30} height={30} alt="logo" src={"/logo-instagram.png"} />
                <Image width={30} height={30} alt="logo" src={"/logo-whatsapp.png"} />
                <Image width={30} height={24} alt="logo" src={"/logo-youtube.svg"} />
              </div>
            </div>
            <div>
              <h1 className="mb-5 text-xl font-semibold">Explore</h1>
              <ul className="[&>li]:mb-2">
                <li>Home</li>
                <li>Catalog</li>
                <li>FAQs</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-primary py-2 text-center text-sm text-white">
        Copyright © 2024 Kapal Lawd Team. developed by Kapal Lawd Team 📍
      </p>
    </footer>
  );
}
