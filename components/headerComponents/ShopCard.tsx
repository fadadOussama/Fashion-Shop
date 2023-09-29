"use client";

import { FiShoppingCart } from "react-icons/fi";
import { TbShoppingCartOff } from "react-icons/tb";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetOverlay, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useAppSelector } from "@/rtk/hooks";
import ShopCartProduct from "./ShopCartProduct";
import { useState } from "react";

export default function ShopCard() {
  const cart = useAppSelector((state) => state.cart);
  const cartArr = Object.values(cart);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger aria-label="ShopCardBtn">
        <div>
          <div className="relative rounded bg-gray-100 p-2.5 text-mainColor/40 transition duration-300 hover:text-mainColor">
            <FiShoppingCart className="text-[20px]" />
            {cartArr.length !== 0 && (
              <span className="absolute flex justify-center items-center -top-2 -right-3 w-[24px] h-[24px] rounded-full text-xs bg-mainColor text-white">
                {cartArr.length}
              </span>
            )}
          </div>
        </div>
      </SheetTrigger>
      <SheetOverlay className="bg-white/80 backdrop-blur-[1px]" />
      <SheetContent className="w-full max-w-[400px]">
        <SheetHeader className="text-[24px]">Shop Carts</SheetHeader>
        <div className="relative h-full max-w-sm rounded-t-xl pt-6 pb-14" aria-modal="true" role="dialog" tabIndex={-1}>
          {cartArr.length === 0 && (
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
              <span className="text-9xl text-gray-200">
                <TbShoppingCartOff />
              </span>
            </div>
          )}

          <div className="mt-4 space-y-6 h-full flex flex-col justify-between">
            <ul className="space-y-4 pr-6 overflow-y-auto scrollbar-thumb-mainColor/20 scrollbar-track-white scrollbar-thin hover:scrollbar-thumb-mainColor/30 scroll-smooth">
              {cartArr.map((product, index) => (
                <ShopCartProduct key={index} product={product} setIsOpen={setIsOpen} />
              ))}
            </ul>

            <div className="bottom-20 space-y-4 text-center">
              <Link href="/myCart" className="mainBtn" onClick={() => setIsOpen(false)}>
                View my cart (<span>{cartArr.length}</span>)
              </Link>

              <SheetClose asChild>
                <div className="inline-block text-sm text-mainColor/80 underline underline-offset-2 transition hover:text-mainColor cursor-pointer duration-300">
                  Continue shopping
                </div>
              </SheetClose>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
