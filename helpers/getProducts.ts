export default async function getProducts(segment: segmentType) {
  const productsPromise = await fetch(`https://fadadoussama.github.io/fashionShop_api/${segment}.json`, { cache: "force-cache" });
  const products = await productsPromise.json();
  return products[segment];
}
