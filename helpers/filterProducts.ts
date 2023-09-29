export function filterProducts(products: productsType, searchParams: searchParamsType) {
  const category = searchParams.category;
  const price = searchParams.price;

  let resultFilterProducts: productsType = [];

  if (!category && !price) {
    resultFilterProducts = products;
  } else if (category === "sweaters" && !price) {
    resultFilterProducts = products.filter((product) => product.category === "sweater");
  } else if (category === "tshirts" && !price) {
    resultFilterProducts = products.filter((product) => product.category === "tshirt");
  } else if (price === "htl" && !category) {
    resultFilterProducts = products.slice().sort((a, b) => b.price - a.price);
  } else if (price === "lth" && !category) {
    resultFilterProducts = products.slice().sort((a, b) => a.price - b.price);
  } else if (category === "sweaters" && price === "htl") {
    resultFilterProducts = products.filter((product) => product.category === "sweater").sort((a, b) => b.price - a.price);
  } else if (category === "sweaters" && price === "lth") {
    resultFilterProducts = products.filter((product) => product.category === "sweater").sort((a, b) => a.price - b.price);
  } else if (category === "tshirts" && price === "htl") {
    resultFilterProducts = products.filter((product) => product.category === "tshirt").sort((a, b) => b.price - a.price);
  } else if (category === "tshirts" && price === "lth") {
    resultFilterProducts = products.filter((product) => product.category === "tshirt").sort((a, b) => a.price - b.price);
  }

  return resultFilterProducts;
}
