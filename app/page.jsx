import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar selected={"produk"} />
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
        <div className="mb-28 grid grid-cols-6 gap-4">
          {Array.from({ length: 6 * 5 }).map((_, index) => (
            <article key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <Image
                height={300}
                width={300}
                src={
                  "https://images.unsplash.com/photo-1442411210769-b95c4632195e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="produk"
                className="aspect-video"
              />
              <div className="p-3">
                <h1 className="mb-2 text-sm font-semibold">[FRESH] Kopi Arabika Khas Malang </h1>
                <div className="mb-2 flex items-center gap-1">
                  <StarIcon width={14} height={14} className="text-orange-500" />
                  <p className="text-xs font-semibold">4.9</p>
                  <p className="text-xs text-slate-500">| 50 terjual</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text font-semibold">Rp245.000</p>
                  <p className="text-xs text-slate-500">per-box</p>
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
