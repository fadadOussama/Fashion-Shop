type searchParamsType = {
  category?: string;
  price?: string;
};

type segmentType = "men" | "women";

type productType = {
  title: string;
  price: number;
  category: string;
  id: number;
  description: string;
  stock: number;
  rating: number;
  images: string[];
  details: string[];
};

type productsType = productType[] | [];

type returnType = {
  error: boolean;
  products: productType[] | [];
};

type queryKeys = "category" | "price";

type queryKeysValues = "htl" | "lth" | "sweaters" | "tshirts";

type sizesType = "S" | "M" | "L" | "XL";

type cartItem = {
  sizes: sizesType[];
  details: productType;
};

type cartType = {
  [key: string]: cartItem;
};
