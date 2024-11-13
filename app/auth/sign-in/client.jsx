"use client";
import NavbarMain from "@/components/NavbarMain";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Masukkan email yang valid",
  }),
});

export default function Client() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <NavbarMain />
      <section className="container flex min-h-[100vh] items-center justify-center">
        <Card className="w-full max-w-xl rounded-xl border-2 border-slate-100 bg-gradient-to-b from-secondary/10 from-10% to-white to-90% px-10 py-10 shadow-sm">
          <Image src={"/logo.png"} width={60} height={60} alt="logo" className="mx-auto mb-2" />
          <h1 className="mb-3 text-center text-2xl font-semibold text-primary">Selamat Datang</h1>
          <p className="mb-10 text-center text-slate-500">
            Masuk untuk akses penuh fitur yang tersedia.
          </p>
          <Form {...form}>
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-5 flex flex-col gap-2">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, non!
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div className="mb-5 flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="**********" />
            </div>
            <Button className="w-full">Masuk</Button>
            <div className="my-5 flex items-center">
              <hr className="w-full" />
              <p className="w-full text-center text-sm text-slate-500">Tidak punya akun?</p>
              <hr className="w-full" />
            </div>
            <Button className="flex w-full items-center justify-center gap-2" variant="secondary">
              <p className="text-sm font-semibold">Buat akun baru</p>
              <ArrowLongRightIcon width={24} height={24} />
            </Button>
          </Form>
        </Card>
      </section>
    </>
  );
}
