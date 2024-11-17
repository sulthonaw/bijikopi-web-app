"use client";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import NavbarMain from "@/components/navbarMain";
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
      <section className="flex min-h-[100vh] items-center justify-center bg-black">
        <Card className="w-full max-w-xl rounded-xl border-2 border-slate-100 px-10 py-10 shadow-sm">
          <h1 className="mb-3 text-center text-2xl font-semibold text-primary">Hello, Admin 👋</h1>
          <p className="mb-10 text-center text-slate-500">
            Sign in for full access to available features.
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
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div className="mb-5 flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="**********" />
            </div>
            <Button className="w-full">Login</Button>
          </Form>
        </Card>
      </section>
    </>
  );
}
