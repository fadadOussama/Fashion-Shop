"use client";

import Image from "next/image";
import { HiStar } from "react-icons/hi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AddToCard from "./productDetailsComponents/AddToCard";
import Sizes from "./productDetailsComponents/Sizes";
import Quantity from "./productDetailsComponents/Quantity";
import { useState } from "react";

type Props = {
  product: productType;
  segment: segmentType;
};

export default function ProductDetails({ product, segment }: Props) {
  const [size, setSize] = useState<sizesType | "">("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="case py-20 flex flex-wrap justify-between gap-6">
      <div className="relative h-[750px] w-[500px] mx-auto overflow-y-auto">
        <Swiper
          grabCursor={true}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image src={product.images[0]} fill sizes="50vw" alt="product image" className="block object-cover" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={product.images[1]} fill sizes="50vw" alt="product image" className="block object-cover" priority />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="border border-mainColor w-[500px] h-fit content-start sm:p-8 p-4 mx-auto relative">
        <div className="flex items-center justify-between pb-2 mb-8 border-b border-mainColor">
          <h3 className="uppercase">{product.title}</h3>
          <span className="text-xl">{product.price}$</span>
        </div>

        <div className="mb-8 p-2 border-b border-mainColor">
          <p className="lowercase text-sm text-center mb-2 font-light">{product.description}</p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {product.details.map((product, index) => (
              <span key={index} className="block text-center capitalize">
                {product}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-center mb-2">
            {product.rating}
            <HiStar />
          </div>
          <p className="lowercase text-sm text-center font-light">We have about {product.stock} of this product in stock.</p>
        </div>

        {/* Quantity */}
        <Quantity quantity={quantity} setQuantity={setQuantity} stock={product.stock} />

        {/* Sizes */}
        <Sizes setSize={setSize} sizeState={size} />

        {/* Add to cart */}
        <AddToCard segment={segment} product={product} size={size} quantity={quantity} />
      </div>
    </div>
  );
}
