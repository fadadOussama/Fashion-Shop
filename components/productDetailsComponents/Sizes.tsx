"use client";

import React, { Dispatch, SetStateAction } from "react";

const arrSizes: sizesType[] = ["S", "M", "L", "XL"];

type Props = {
  sizeState: sizesType | "";
  setSize: Dispatch<SetStateAction<"" | sizesType>>;
};

export default function Sizes({ setSize, sizeState }: Props) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 text-center w-full p-6">
      {arrSizes.map((size, index) => (
        <div
          key={index}
          className={`border border-mainColor py-1 cursor-pointer ${
            sizeState === size ? "bg-mainColor text-white" : "hover:bg-gray-100 "
          } transition-colors duration-300`}
          onClick={() => setSize(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
}
