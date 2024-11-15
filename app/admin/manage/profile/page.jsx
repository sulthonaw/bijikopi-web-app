import AvatarProfil from "@/components/avatarProfil";
import LayoutManage from "@/components/layoutManage";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

export default function Page() {
  return (
    <LayoutManage activeNavItem={"profile"}>
      <Card className={"p-4 shadow-sm"}>
        <div className="flex w-full items-center justify-between">
          <h1 className="mb-5 text-xl font-semibold">Informasi Profil</h1>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Edit Mode</Label>
          </div>
        </div>
        <AvatarProfil />
        <div className="mb-5 grid grid-cols-4 gap-6">
          <div className="col-span-2 flex flex-col gap-2">
            <Label htmlFor={"name"}>Nama</Label>
            <Input id={"name"} value={"Abdur Rohman Fatih"} readOnly />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Label htmlFor={"email"}>Email</Label>
            <Input id={"email"} value={"email@gmail.com"} readOnly />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Label htmlFor={"addres"}>Alamat</Label>
            <Input id={"addres"} value={"Jalan kemanggi No. 12 Kec. Malang"} readOnly />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor={"telephone"}>Kode Pos</Label>
            <Input id={"telephone"} value={"246517"} readOnly />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor={"telephone"}>No. Telepon</Label>
            <Input id={"telephone"} value={"0982313774"} readOnly />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button>Update Profil</Button>
        </div>
      </Card>
    </LayoutManage>
  );
}
