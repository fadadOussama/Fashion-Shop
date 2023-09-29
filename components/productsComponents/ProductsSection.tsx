import React from "react";
import { fetchProducts } from "@/helpers/fetchProducts";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import ProductsTitle from "./ProductsTitle";
import { prata } from "@/app/layout";

type Props = {
  searchParams: searchParamsType;
  segment: segmentType;
};

export default async function ProductsSection({ segment, searchParams }: Props) {
  const { products } = await fetchProducts(segment, searchParams);

  return (
    <section>
      <div className="case py-20">
        <ProductsTitle segment={segment} font={prata.className} />
        <div className="sm:flex sm:gap-10">
          <div className="sm:w-[200px] sm:mb-0 mb-6">
            <p className="text-3xl font-light mb-4">Filter</p>
            <Filters segment={segment} />
          </div>
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product: productType) => (
                <ProductCard key={product.id} product={product} segment={segment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
