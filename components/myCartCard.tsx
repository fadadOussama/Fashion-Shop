import Image from "next/image";
import ShopCartDeleteBtn from "./headerComponents/ShopCartDeleteBtn";

type Props = {
  product: cartItem;
};

export default function MyCartCard({ product }: Props) {
  return (
    <li className="flex items-center gap-4">
      <Image src={product.details.images[0]} alt="" width={100} height={150} />

      <div>
        <h3 className="text-gray-900 uppercase text-sm">{product.details.title}</h3>
        <span className="text-mainColor text-xl mt-2">{product.details.price}$</span>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <span className="block border border-mainColor w-12 p-1 text-center text-sm">{product.sizes.length}</span>
        <ShopCartDeleteBtn id={product.details.id} imageUrl={product.details.images[0]} />
      </div>
    </li>
  );
}
