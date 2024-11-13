import React from "react";
import AsideNavbar from "./asideNavbar";
import { UserIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function LayoutManage({ children, activeNavItem }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-slate-50 pl-64">
      <AsideNavbar active={activeNavItem} />
      <header className="border-b bg-white p-4">
        <div className="flex w-max gap-2 rounded-lg p-2 text-slate-700">
          <UserIcon width={24} height={24} />
          <p>Abdur Ganteng</p>
          <ChevronDownIcon width={24} height={24} />
        </div>
      </header>
      <section className="p-4">{children}</section>
    </main>
  );
}
