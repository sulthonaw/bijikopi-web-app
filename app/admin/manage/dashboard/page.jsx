import AsideNavbar from "@/components/asideNavbar";
import LayoutManage from "@/components/layoutManage";
import { Card } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <LayoutManage activeNavItem={"dashboard"}>
      <Card className={"p-4 shadow-sm"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum pariatur sapiente
        consequatur, at temporibus ipsum provident ut odio quas qui rem, aliquid tempora eos libero
        ea, tempore quos! Excepturi.
      </Card>
    </LayoutManage>
  );
}
