import { filterProducts } from "./filterProducts";

export async function fetchProducts(segment: segmentType, searchParams: searchParamsType) {
  const result: returnType = {
    error: false,
    products: [],
  };

  try {
    const productsPromise = await fetch(`https://fadadoussama.github.io/fashionShop_api/${segment}.json`, { cache: "force-cache" });
    const products = await productsPromise.json();

    result.products = filterProducts(products[segment], searchParams);
    return result;
  } catch (error) {
    throw new Error(`Unable to fetch ${segment} products.`);
  }
}
