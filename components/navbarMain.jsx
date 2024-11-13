import Image from "next/image";
import React from "react";
import Banner from "./banner";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavbarMain({ selected }) {
  const classSelected = "bg-slate-100 font-semibold";
  return (
    <>
      <Banner />
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="container flex items-center justify-between bg-white py-4">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image src={"/logo.png"} width={42} height={42} alt="logo" />
              <h1 className="text-3xl font-semibold text-primary">Exporify</h1>
            </div>
          </Link>
          <ul className="bottom-0 flex gap-4">
            <Link href={"/"}>
              <li
                className={
                  "rounded-lg px-4 py-2 " +
                  (selected == "produk" ? classSelected : "text-slate-500")
                }
              >
                Produk
              </li>
            </Link>
            <Link href={"/request-produk"}>
              <li
                className={
                  "rounded-lg px-4 py-2 " +
                  (selected == "request-produk" ? classSelected : "text-slate-500")
                }
              >
                Request Produk
              </li>
            </Link>
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
