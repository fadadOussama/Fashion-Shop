"use client";

import { Sheet, SheetContent, SheetHeader, SheetOverlay, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import SignOut from "../signComponents/SignOut";
import { useState } from "react";
import SignIn from "../signComponents/SignIn";

type Props = {
  children: React.ReactNode;
};

export default function SheetNav({ children }: Props) {
  const [open, setOpen] = useState(false);

  const handleSheetClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="NavigationBtn">
        <div className="block md:hidden">
          <div className="rounded bg-gray-100 p-2.5 text-mainColor/40 transition duration-300 hover:text-mainColor">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </SheetTrigger>
      <SheetOverlay className="bg-white/60 backdrop-blur-sm" />
      <SheetContent
        side="left"
        className="w-full max-w-[400px] overflow-y-auto scrollbar-thumb-mainColor/20 scrollbar-track-white scrollbar-thin hover:scrollbar-thumb-mainColor/30 scroll-smooth"
      >
        <SheetHeader className="text-[24px]">Navigation</SheetHeader>
        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="item-1">
            <AccordionTrigger className="navLink">PRODUCTS</AccordionTrigger>
            <AccordionContent>
              <div onClick={() => setOpen(false)}>{children}</div>
            </AccordionContent>
          </AccordionItem>

          <Link onClick={handleSheetClose} href="/men" className="block py-4 border-b hover:underline navLink">
            MEN
          </Link>
          <Link onClick={handleSheetClose} href="/women" className="block py-4 border-b hover:underline navLink">
            WOMEN
          </Link>
          <div className="flex mt-10 gap-6">
            <SignIn style="signMobile" setOpen={setOpen} />
            <SignOut style="signMobile" setOpen={setOpen} />
          </div>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
