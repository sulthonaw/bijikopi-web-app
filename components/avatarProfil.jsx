"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CameraIcon as CameraIconOutline } from "@heroicons/react/24/outline";
import { CameraIcon as CameraIconSolid } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Image from "next/image";

export default function AvatarProfil() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handler untuk ketika file dipilih
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
    }
  };

  const style = !isHovered ? "bg-slate-950/50 " : "bg-slate-950";

  return (
    <Dialog>
      <DialogTrigger>
        <Avatar
          className={"relative mb-5 h-28 w-28 cursor-pointer text-white"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AvatarImage src={"/profil.png"} />
          <AvatarFallback>PF</AvatarFallback>
          <div
            className={"absolute bottom-0 flex w-full items-center justify-center py-1 " + style}
          >
            {isHovered ? (
              <CameraIconSolid width={18} height={18} />
            ) : (
              <CameraIconOutline width={18} height={18} />
            )}
          </div>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"mb-4"}>Update Profil</DialogTitle>
          <div>
            {file ? null : (
              <Button variant="outline" className={"relative w-full"}>
                <Label
                  htmlFor="image"
                  className={
                    "gap absolute flex h-full w-full cursor-pointer items-center justify-center gap-2"
                  }
                >
                  <CameraIconOutline width={24} height={24} />
                  Pilih dari komputer
                </Label>
              </Button>
            )}
            {file && (
              <div className="flex flex-col items-center justify-center gap-1">
                <Image
                  src={previewUrl}
                  width={200}
                  height={200}
                  alt="preview"
                  className="aspect-square h-32 w-32 rounded-full border-2 object-cover"
                />
                Preview
              </div>
            )}
            <Input
              id="image"
              type="file"
              className={"hidden"}
              accept={"image/*"}
              onChange={handleFileChange}
            />
            {file && (
              <div className="mt-5 flex justify-center gap-2">
                <Button variant="outline" className={"relative text-slate-950"}>
                  <Label
                    htmlFor="image"
                    className={
                      "gap relative flex h-full w-full cursor-pointer items-center justify-center gap-2"
                    }
                  >
                    <CameraIconOutline width={24} height={24} />
                    Ganti
                  </Label>
                </Button>
                <Button>Update</Button>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
