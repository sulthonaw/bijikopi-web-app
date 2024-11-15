import React from "react";
import AsideNavbar from "./asideNavbar";
import { UserIcon } from "@heroicons/react/24/solid";
import { ArrowRightStartOnRectangleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function LayoutManage({ children, activeNavItem }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-slate-50 pl-64">
      <AsideNavbar active={activeNavItem} />
      <header className="flex items-center justify-end gap-2 border-b bg-white p-4">
        <div>
          <Avatar>
            <AvatarFallback>AD</AvatarFallback>
            <AvatarImage src={"/profil.png"} />
          </Avatar>
        </div>
        |
        <Button variant={"destructive"}>
          Logout
          <ArrowRightStartOnRectangleIcon width={24} height={24} />
        </Button>
      </header>
      <section className="p-4">{children}</section>
    </main>
  );
}
