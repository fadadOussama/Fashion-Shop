import ProductDetails from "@/components/ProductDetails";
import getProducts from "@/helpers/getProducts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const menProducts = await getProducts("women");

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
  const menProducts = await getProducts("women");
  const product: productType = menProducts[Number(id) - 1];

  return <ProductDetails product={product} segment="women" />;
}
