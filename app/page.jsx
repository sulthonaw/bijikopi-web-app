import CardProduk from "@/components/cardProduk";
import Footer from "@/components/footer";
import NavbarMain from "@/components/navbarMain";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavbarMain selected={"produk"} />
      <section className="container">
        <div className="mx-auto mt-10 rounded-xl bg-slate-300 bg-[url('/market.jpg')] bg-cover bg-center bg-no-repeat py-28 text-center">
          <h1 className="my-10 text-4xl font-semibold">Temukan Produkmu</h1>
          <input
            id="search"
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
            <Link key={index} href={"/produk/1"}>
              <CardProduk />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
