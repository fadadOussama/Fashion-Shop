"use client";

import cartSliceHandler, { cartSliceHandlerReturnType } from "@/rtk/slices/cartSliceHandler";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useUser } from "@clerk/nextjs";
import getUserId from "@/helpers/getUserId";
import { useState } from "react";

type Props = {
  segment: segmentType;
  quantity: number;
  product: productType;
};

const arrSizes: sizesType[] = ["S", "M", "L", "XL"];

export default function AddProductCart({ segment, quantity, product }: Props) {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleCart = async (size: sizesType | "") => {
    if (size === "") {
      toast.error("Choose a size before adding to cart");
    } else {
      const userId = getUserId(user);
      const { success, number }: cartSliceHandlerReturnType = await cartSliceHandler(segment, product, size, quantity, userId);

      if (success) {
        toast.success("Product added to cart successfully");
      } else if (number === 0) {
        toast.success("You reached the stock");
      } else {
        toast.success(`Only ${number} product left`);
      }
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-x-0 bottom-0 py-2 opacity-0 translate-y-[30px] group-hover:translate-y-0 transition-all duration-300 bg-mainColor/80 hover:bg-mainColor text-white text-[13px] group-hover:opacity-100 font-light"
      >
        Add To Cart
      </button>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-medium text-center">YOU MUST SELECT A SIZE</AlertDialogTitle>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 text-center w-full">
            {arrSizes.map((size, index) => (
              <AlertDialogAction
                key={index}
                className="border rounded-none bg-white text-mainColor border-mainColor py-1 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                onClick={() => handleCart(size)}
              >
                {size}
              </AlertDialogAction>
            ))}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="block border-none mx-auto bg-mainColor px-5 py-2.5 font-medium text-gray-100 hover:text-mainColor hover:bg-gray-100 transition duration-300">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
