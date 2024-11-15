"use client";
import Logo from "@/components/logo";
import NavbarMain from "@/components/navbarMain";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

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
      <section className="container flex min-h-[100vh] items-center justify-center py-16">
        <Card className="w-full max-w-xl rounded-xl border-2 border-slate-100 px-10 py-10 shadow-sm">
          <Logo className="mx-auto mb-5 w-36" />
          <h1 className="mb-3 text-center text-2xl font-semibold text-primary">Daftar</h1>
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
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-5 flex flex-col gap-2">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-5 flex flex-col gap-2">
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="+62" {...field} />
                    </FormControl>
                    <FormDescription>Input active phone</FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-5 flex flex-col gap-2">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormDescription>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, non!
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
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
      <Footer />
    </>
  );
}
