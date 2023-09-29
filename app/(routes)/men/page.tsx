import ProductsSection from "@/components/productsComponents/ProductsSection";

type Props = {
  searchParams: searchParamsType;
};

export default function MenPage({ searchParams }: Props) {
  return <ProductsSection segment="men" searchParams={searchParams} />;
}
