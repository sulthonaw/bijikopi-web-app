import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function CardProduk() {
  return (
    <Card className={"overflow-hidden shadow-sm"}>
      <Image
        src={
          "https://images.unsplash.com/photo-1442411210769-b95c4632195e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={200}
        height={300}
        alt="image-produk"
        className="h-36 w-full object-cover object-center"
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
    </Card>
  );
}
