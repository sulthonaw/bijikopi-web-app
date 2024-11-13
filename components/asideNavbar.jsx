import { ArchiveBoxArrowDownIcon, Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AsideNavbar({ active }) {
  const activeNavItem = (active, type) => {
    if (active == type) {
      return "bg-primary text-white";
    }
    return "hover:bg-primary/10 text-slate-700";
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
      <nav className="px-4 py-5">
        <div className="mb-10 flex items-center justify-center gap-5 px-2">
          <Image src={"/logo.png"} width={40} height={40} alt="logo" />
          <h1 className="text-3xl font-semibold text-primary">Exporify</h1>
        </div>
        <ul className="flex w-full flex-col gap-4">
          <li>
            <Link href={"/manage/dashboard"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "dashboard")}`}
              >
                <Squares2X2Icon width={20} height={20} />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/manage/produk"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "produk")}`}
              >
                <ArchiveBoxArrowDownIcon width={20} height={20} />
                <p>Produk</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/manage/profil"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "profil")}`}
              >
                <UserCircleIcon width={20} height={20} />
                <p>Profil</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
