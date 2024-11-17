import LayoutManage from "@/components/layoutManage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableDemo } from "./datatable";

export default function page() {
  return (
    <LayoutManage activeNavItem={"products"}>
      <div className="mb-4 flex justify-end">
        <Button>
          <PlusIcon width={16} height={16} />
          Tambah Produk
        </Button>
      </div>
      <Card className="h-[120vh] bg-white p-4 shadow-sm">
        <h1 className="mb-2 text-lg font-semibold">Manage Produk</h1>
        <p className="mb-5 text-sm text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius totam dolorem quam ea nam
          exercitationem, odio necessitatibus facilis blanditiis. Eligendi iste repellat ducimus
          voluptatem hic quisquam aliquam asperiores quis doloremque!
        </p>
        <DataTableDemo />
      </Card>
    </LayoutManage>
  );
}
