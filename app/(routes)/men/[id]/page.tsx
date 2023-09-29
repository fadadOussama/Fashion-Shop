import ProductDetails from "@/components/ProductDetails";
import getProducts from "@/helpers/getProducts";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const menProducts = await getProducts("men");

  return menProducts.map((product: productType) => ({
    id: product.id.toString(),
  }));
}

type propsType = {
  params: {
    id: string;
  };
};

export default async function MenProductPage({ params: { id } }: propsType) {
  const menProducts = await getProducts("men");
  const product: productType = menProducts[Number(id) - 1];

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} segment="men" />;
}
