import Navbar from "@/components/Navbar";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <section className="container flex min-h-[100vh] items-center justify-center">
        <div className="w-full max-w-xl rounded-xl border-2 border-slate-100 bg-gradient-to-b from-secondary/10 from-10% to-white to-90% px-10 py-10 shadow-sm">
          <Image src={"/logo.png"} width={60} height={60} alt="logo" className="mx-auto mb-2" />
          <h1 className="mb-3 text-center text-2xl font-semibold text-primary">Selamat Datang</h1>
          <p className="mb-10 text-center text-slate-500">
            Masuk untuk akses penuh fitur yang tersedia.
          </p>
          <form action="">
            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                placeholder="@example.com"
              />
            </div>
            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                placeholder="**********"
              />
            </div>
            <button className="w-full rounded-lg bg-primary py-4 text-sm font-semibold text-white">
              Masuk
            </button>
            <div className="my-5 flex items-center">
              <hr className="w-full" />
              <p className="w-full text-center text-sm text-slate-500">Tidak punya akun?</p>
              <hr className="w-full" />
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary/10 py-4 text-primary">
              <p className="text-sm font-semibold">Buat akun baru</p>
              <ArrowLongRightIcon width={24} height={24} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
