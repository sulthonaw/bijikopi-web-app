import CardProduk from "@/components/cardProduk";
import Footer from "@/components/footer";
import NavbarMain from "@/components/navbarMain";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <NavbarMain selected={"produk"} /> */}
      <section className="m-2 overflow-hidden rounded-2xl">
        <div className="relative min-h-[98vh] bg-[url('/coffee-bean.jpg')] bg-cover bg-no-repeat">
          <div className="relative z-10 flex h-[98vh] items-center justify-center text-white">
            <div className="max-w-4xl text-center">
              <h1 className="mb-5 text-9xl font-semibold">BIJIKOPI</h1>
              <p className="mb-10 text-lg font-medium text-slate-300">
                From the finest beans straight from local farmers, we bring you an authentic coffee
                experience.
              </p>
              <Button
                variant={"outline"}
                className={"h-max gap-5 rounded-full bg-transparent px-6 py-3 text-xl"}
              >
                Explore More
                <div className="textwh aspect-square rounded-full bg-black p-3 text-white">
                  <ArrowDownIcon width={18} height={18} />
                </div>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 top-0 w-full bg-gradient-to-t from-black" />
        </div>
      </section>
      <section className="container py-10">
        <h1>Know more about us</h1>
      </section>
      {/* <Footer /> */}
    </>
  );
}
