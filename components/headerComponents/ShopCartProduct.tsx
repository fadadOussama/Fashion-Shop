import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import ShopCartDeleteBtn from "./ShopCartDeleteBtn";
import Link from "next/link";

type Props = {
  product: cartItem;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ShopCartProduct({ product: { sizes, details }, setIsOpen }: Props) {
  const isWomen = details.images[0].includes("women");
  const productPath = isWomen ? `/women/${details.id}` : `/men/${details.id}`;

  return (
    <li className="shopCardItem">
      <Image src={details.images[0]} width={64} height={64} alt="shop card image" className="rounded-md object-cover" />

      <div>
        <Link href={productPath} onClick={() => setIsOpen(false)}>
          <h3 className="text-gray-900 uppercase text-[13px] hover:underline hover:underline-offset-1">{details.title}</h3>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <span className="block w-12 p-2  bg-gray-100 text-center text-xs rounded-md">{sizes.length}</span>

        <ShopCartDeleteBtn imageUrl={details.images[0]} id={details.id} />
      </div>
    </li>
  );
}
