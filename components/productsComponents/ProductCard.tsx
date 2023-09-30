import Image from "next/image";
import Link from "next/link";
import AddProductCart from "./AddProductCart";

type Props = {
  product: productType;
  segment: segmentType;
};

export default async function ProductCard({ product, segment }: Props) {
  return (
    <>
      <div className="group overflow-hidden block group">
        <div className="relative h-[350px] bg-gray-100 overflow-y-hidden">
          <Link href={`/${segment}/${product.id}`} className="relative block h-full">
            <Image
              src={product.images[0]}
              fill
              sizes="30vw"
              alt="product image"
              className="block object-cover opacity-100 group-hover:opacity-0 transition duration-500"
              priority
            />

            <Image
              src={product.images[1]}
              fill
              sizes="30vw"
              alt="product image"
              className="block object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </Link>

          <AddProductCart segment={segment} quantity={1} product={product} />
        </div>
        <Link href={`/${segment}/${product.id}`} className="block mt-4 text-center">
          <p className="text-xs uppercase group-hover:underline group-hover:underline-offset-2">{product.title}</p>
          <span>${product.price}</span>
        </Link>
      </div>
    </>
  );
}
