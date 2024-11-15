"use client";
import NavbarMain from "@/components/navbarMain";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLongRightIcon, ArrowUpRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";

function OurProducts() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="mb-3" id="catalog">
      <Carousel className="w-full" plugins={[plugin.current]} setApi={setApi}>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-semibold text-slate-500">See our</p>
            <h1 className="mb-4 text-7xl font-semibold">Products</h1>
          </div>
          <div>
            <div className="flex justify-end gap-2">
              <CarouselPrevious className={"static h-16 w-16"} variant={"default"} />
              <CarouselNext className={"static h-16 w-16"} variant={"default"} />
            </div>
            <div className="text-right text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>
        </div>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={"basis-1/4"}>
              <div className="p-1">
                <Card className={"relative mb-2 overflow-hidden shadow-sm"}>
                  <Image
                    src={"/product.jpg"}
                    width={400}
                    className="h-96 w-full object-cover"
                    height={400}
                    alt="product"
                  />
                  <span className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-lg bg-white px-3 py-1 text-xs font-bold text-black">
                    <StarIcon width={12} height={12} />
                    BEST SELLER
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-black/50 p-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">Kopi Robusta</h3>
                      <p className="text-slate-300">$20</p>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function FAQs() {
  return (
    <section id="faqs" className="container py-16">
      <p className="mb-2 text-center">Ada pertanyaan?</p>
      <h1 className="mb-5 text-center text-7xl font-bold">FAQs</h1>
      <p className="mb-16 text-center">- Frequently Ask Questions -</p>
      <Accordion type="single" collapsible className="mx-auto max-w-4xl">
        {Array.from({ length: 7 }).map((_, index) => (
          <AccordionItem value={"item-" + index} key={index}>
            <AccordionTrigger>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, veniam?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse. Esse
              placeat ipsa quidem, laboriosam molestias iste unde nam rerum nostrum consectetur
              repellendus, expedita dolorum inventore sapiente! Possimus, recusandae accusamus.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function CTA() {
  return (
    <section className="container py-16">
      <div className="flex items-end justify-between rounded-2xl bg-gradient-to-tr from-black from-80% to-slate-700 px-10 py-16 text-white">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold text-slate-300">TRY NOW</p>
          <h1 className="mb-5 text-6xl">Ready to do business with us?</h1>
          <p className="text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque voluptatibus
            ducimus ab inventore laboriosam, debitis aliquam. Veritatis dolorum fuga ullam est nam a
            rem aliquam. Sit sunt doloremque nemo.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant={"secondary"}>Get Started</Button>
          <Button variant={"ghost"}>
            Learn More
            <ArrowUpRightIcon width={24} height={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}

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
      <section className="container py-16" id="about-us">
        <p className="mb-4 text-center">Get to Know Us Better</p>
        <h1 className="mb-20 text-center text-7xl font-semibold">About Us</h1>
        <div className="flex items-center justify-between gap-x-20">
          <div className="flex-1">
            <h1 className="mb-5 font-semibold">Established in</h1>
            <p className="mb-5 text-9xl font-semibold">2014</p>
            <p>
              <strong>BIJIKOPI</strong> was born as an expression of our love for Indonesian coffee.
              Inspired by the rich flavors from Sabang to Merauke, we are committed to delivering
              carefully crafted, premium coffee with expertise and dedication. By using the finest
              coffee beans harvested by local farmers, we believe that every sip of coffee tells a
              story of the land, culture, and spirit of the farmers.
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
      <section className="container grid grid-cols-3 gap-10 py-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card className={"p-4 shadow-none"} key={index}>
            <GlobeAltIcon width={50} height={50} className="mb-5" />
            <h1 className="mb-2 text-2xl font-semibold">Standardized</h1>
            <p className="text-justify text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa suscipit recusandae
              itaque velit?
            </p>
          </Card>
        ))}
      </section>
      <section className="container py-16">
        <h1 className="mb-5 text-center text-6xl font-bold">Partner</h1>
        <p className="mx-auto mb-16 max-w-5xl text-center text-slate-500">
          Our partners who have collaborated with us have experienced the benefits of our support in
          achieving their business success and realizing every strategic plan they have carefully
          crafted.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5">
          {Array.from({ length: 14 }).map((_, index) => (
            <Card key={index} className={"p-4 shadow-sm"}>
              <p className="text-nowrap">PARTNER {index + 1}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="container py-16">
        <OurProducts />
        <div className="flex justify-end">
          <Button variant={"ghost"} className={"font-semibold"}>
            See All
            <ArrowLongRightIcon width={24} height={24} />
          </Button>
        </div>
      </section>
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}
