import NavbarMain from "@/components/navbarMain";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <NavbarMain />
      <div className="container my-10 grid grid-cols-2 gap-10">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border-2">
                    <Image
                      src={"/profil.png"}
                      width={500}
                      height={500}
                      alt="produk"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"left-4"} />
          <CarouselNext className={"right-4"} />
        </Carousel>
        <div className="col-span-1">
          <h1 className="mb-4 text-2xl font-semibold">Bungkus Kopi</h1>
          <div className="flex gap-1">
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <StarIcon width={20} height={20} />
            <div className="font-semibold">- (4,9)</div>
          </div>
        </div>
      </div>
      <div className="container mb-10 flex items-center gap-10">
        <Avatar className={"h-24 w-24"}>
          <AvatarImage src={"/profil.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1>Pak Asep</h1>
          <p>Pengepul</p>
        </div>
      </div>
      <div className="container">
        <h1 className="mb-5 text-3xl font-medium">Detail Produk</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ducimus, labore eius sed id
          magni esse quisquam, sequi quo nisi nostrum culpa dolore autem officiis ipsa ratione.
          Quibusdam quia neque recusandae culpa consequatur voluptatem qui quos hic sit eveniet
          repellat, fuga veniam reprehenderit. Magnam, dolore perspiciatis assumenda numquam
          incidunt ut minus doloremque, voluptate ipsum eveniet placeat nihil tempore ratione
          quibusdam deserunt molestias eaque beatae doloribus blanditiis nostrum, repellat veritatis
          nisi! Eligendi ipsa deserunt cum molestiae inventore facilis quibusdam laborum voluptates,
          praesentium sit ipsam modi veniam dicta necessitatibus repellendus dolores quas.
          Consequuntur atque provident assumenda aut accusantium quae sapiente, eaque aperiam!
        </p>
      </div>
    </>
  );
}
