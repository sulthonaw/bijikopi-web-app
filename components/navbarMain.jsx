import Image from "next/image";
import React from "react";
// import Banner from "./banner";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavbarMain({ selected }) {
  const classSelected = "bg-slate-100 font-semibold";

  const navItems = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/catalog",
      name: "Catalog",
    },
    {
      url: "/faqs",
      name: "FAQs",
    },
    {
      url: "/about-us",
      name: "About Us",
    },
    {
      url: "/contact-us",
      name: "Contact Us",
    },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 m-4 w-full shadow">
        {/* <Banner /> */}
        <div className="container flex items-center justify-between py-4">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image src={"/logo.png"} width={42} height={42} alt="logo" />
              <h1 className="text-3xl font-semibold text-primary">Exporify</h1>
            </div>
          </Link>
          <ul className="bottom-0 flex gap-4">
            {navItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <li
                  className={
                    "rounded-lg px-4 py-2 " +
                    (selected == item.name ? classSelected : "text-slate-500")
                  }
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex gap-4">
            <Link href={"/auth/sign-up"}>
              <Button variant={"ghost"}>Daftar</Button>
            </Link>
            <Link href={"/auth/sign-in"}>
              <Button>Masuk</Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
