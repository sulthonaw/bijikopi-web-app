import Footer from "@/components/footer";
import NavbarMain from "@/components/navbarMain";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavbarMain selected={"request-produk"} />
      <section className="container">
        <div className="mx-auto my-28 text-center">
          <h1 className="my-10 text-4xl font-semibold">Temukan Produkmu</h1>
          <input
            type="text"
            className="rounded-lg border px-4 py-2 focus:outline-none"
            placeholder="Pencarian"
          />
        </div>
        <div className="mb-5">
          <h1>Terdia untukmu</h1>
        </div>
        <div className="mb-28 grid grid-cols-2 gap-4">
          {Array.from({ length: 6 * 5 }).map((_, index) => (
            <article key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="p-3">
                <div className="mb-2 w-max rounded-full bg-tertiary px-2 py-1 text-xs">kopi</div>
                <h1 className="mb-2 font-semibold">Dicari biji kopi jawa dengan standar AISEC</h1>
                <p className="mb-1 text-sm font-semibold text-slate-500">Rentang harga</p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text font-semibold">Rp245.000</p>
                  </div>
                  <p>-</p>
                  <div className="flex items-center gap-2">
                    <p className="text font-semibold">Rp245.000</p>
                    <p className="text-xs text-slate-500">per-box</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
