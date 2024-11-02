"use client";
import React, { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Banner() {
  const ref = useRef();

  return (
    <div className="bg-black text-white" ref={ref}>
      <div className="container flex items-center justify-between py-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-tertiary/50"></span>
          </span>
          <p>Bantu UMKM sekitar untuk temukan pasar internasionalnya.</p>
        </div>
        <button
          className="active:scale-75"
          onClick={() => ref.current.remove()}
        >
          <XMarkIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
