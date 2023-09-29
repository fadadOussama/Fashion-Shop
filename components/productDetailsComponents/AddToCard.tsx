"use client";

import getUserId from "@/helpers/getUserId";
import cartSliceHandler, { cartSliceHandlerReturnType } from "@/rtk/slices/cartSliceHandler";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {
  segment: segmentType;
  product: productType;
  size: sizesType | "";
  quantity: number;
};

export default function AddToCard({ segment, product, size, quantity }: Props) {
  const { user } = useUser();
  const [adding, setAdding] = useState(false);

  const handleCart = async () => {
    if (size === "") {
      toast.error("Choose a size before adding to cart");
    } else {
      const userId = getUserId(user);

      setAdding(true);
      const { success, number }: cartSliceHandlerReturnType = await cartSliceHandler(segment, product, size, quantity, userId);

      if (success) {
        toast.success("Product added to cart successfully");
      } else if (number === 0) {
        toast.success("You reached the stock");
      } else {
        toast.success(`Only ${number} product left`);
      }

      setAdding(false);
    }
  };

  return (
    <div
      onClick={handleCart}
      className={`p-2 w-full text-center border border-mainColor transition-colors duration-300 cursor-pointer ${
        size === "" ? "hover:bg-gray-100" : "bg-mainColor text-white"
      }`}
    >
      {adding ? "ADDING.. " : "ADD TO CART"}
    </div>
  );
}
