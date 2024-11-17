import {
  ArchiveBoxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";

export default function AsideNavbar({ active }) {
  const activeNavItem = (active, type) => {
    if (active == type) {
      return "bg-white text-black";
    }
    return "hover:bg-white/20 text-slate-300";
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background bg-slate-950 sm:flex">
      <nav className="px-4 py-7">
        <Logo className="mx-auto mb-10 w-36 text-white" />
        <h2 className="mb-3 text-sm font-bold text-white">Dashboard</h2>
        <ul className="mb-6 flex w-full flex-col gap-4">
          <li>
            <Link href={"/admin/manage/overview"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "overview")}`}
              >
                <Squares2X2Icon width={20} height={20} />
                <p>Overview</p>
              </div>
            </Link>
          </li>
        </ul>
        <h2 className="mb-3 text-sm font-bold text-white">Manage</h2>
        <ul className="flex w-full flex-col gap-4">
          <li>
            <Link href={"/admin/manage/products"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "products")}`}
              >
                <ArchiveBoxArrowDownIcon width={20} height={20} />
                <p>Products</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/admin/manage/messages"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "news")}`}
              >
                <ChatBubbleBottomCenterTextIcon width={20} height={20} />
                <p>Messages</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/admin/manage/faqs"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "faqs")}`}
              >
                <QuestionMarkCircleIcon width={20} height={20} />
                <p>FAQs</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/admin/manage/profile"}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${activeNavItem(active, "profile")}`}
              >
                <UserCircleIcon width={20} height={20} />
                <p>Profile</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
