import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t-2 bg-white">
      <div className="container py-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <Image src={"/logo.png"} width={42} height={42} alt="logo" />
              <h1 className="text-3xl font-semibold text-primary">Exporify</h1>
            </div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, nesciunt?
            </p>
          </div>
          <div className="col-span-7">
            <div>
              <h1 className="font-semibold">Navigasi</h1>
              <ul>
                <li>Produk</li>
                <li>Request Produk</li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold">Navigasi</h1>
              <ul>
                <li>Produk</li>
                <li>Request Produk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-primary py-2 text-center text-sm text-white">
        dibuat oleh TIM KAPAL LAWD - 2024
      </p>
    </footer>
  );
}
