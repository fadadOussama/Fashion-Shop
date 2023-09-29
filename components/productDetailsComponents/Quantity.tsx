"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  stock: number;
};

export default function Quantity({ quantity, setQuantity, stock }: Props) {
  return (
    <div className="h-9 px-2 border border-mainColor w-fit flex items-center gap-x-5 mx-auto">
      <button
        disabled={quantity === 1 && true}
        className={`text-sm text-mainColor ${quantity === 1 && "cursor-not-allowed text-mainColor/50"}`}
        onClick={() => setQuantity(quantity - 1)}
      >
        <FiMinus />
      </button>
      <span>{quantity}</span>
      <button
        disabled={quantity === stock && true}
        className={`text-sm text-mainColor ${quantity === stock && "cursor-not-allowed text-mainColor/50"}`}
        onClick={() => setQuantity(quantity + 1)}
      >
        <FiPlus />
      </button>
    </div>
  );
}
