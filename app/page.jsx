import CardProduk from "@/components/cardProduk";
import NavbarMain from "@/components/navbarMain";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDownIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavbarMain selected={"Home"} />
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
                className={
                  "absolute bottom-10 left-0 right-0 mx-auto h-max w-max gap-5 rounded-full bg-transparent px-7 text-xl"
                }
              >
                Explore More
                <div className="textwh aspect-square rounded-full bg-black p-3 text-white">
                  <ArrowDownIcon width={16} height={16} />
                </div>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 top-0 w-full bg-gradient-to-t from-black" />
        </div>
      </section>
      <section className="container py-16">
        <p className="mb-4 text-center">Lebih kenal dengan kita</p>
        <h1 className="mb-20 text-center text-8xl font-semibold">Tentang Kita</h1>
        <div className="flex items-center justify-between gap-x-20">
          <div className="flex-1">
            <h1 className="mb-5 font-semibold">Berdiri sejak</h1>
            <p className="mb-5 text-9xl font-semibold">2014</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda incidunt
              dignissimos sint cum ex veritatis obcaecati quos quae nihil, ullam vel voluptatibus
              aliquam quibusdam tempora, non provident id. Magnam!
            </p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={400}
              src={"/farmer.jpg"}
              alt="farmer"
              className="aspect-[3/4] h-96 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
