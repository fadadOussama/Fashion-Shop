import UpdateCartInFirestore from "@/firebase/updateCartInFirestore";
import { store } from "../store";
import { updateCart } from "./cartSlice";

export type cartSliceHandlerReturnType = {
  success: boolean;
  number?: number;
};

export default async function cartSliceHandler(
  segment: segmentType,
  product: productType,
  size: sizesType,
  quantity: number,
  userId: string
): Promise<cartSliceHandlerReturnType> {
  const { cart: originalCart } = store.getState();
  const cart = { ...originalCart };

  const id = `${segment}${product.id}`;

  if (!cart.hasOwnProperty(id)) {
    cart[id] = { sizes: Array(quantity).fill(size), details: product };

    store.dispatch(updateCart(cart));
    await UpdateCartInFirestore(cart, userId);

    return { success: true };
  } else {
    if (cart[id].sizes.length + quantity > product.stock) {
      return {
        success: false,
        number: product.stock - cart[id].sizes.length,
      };
    }

    cart[id] = { ...cart[id], sizes: [...cart[id].sizes, ...Array(quantity).fill(size)] };

    store.dispatch(updateCart(cart));
    await UpdateCartInFirestore(cart, userId);

    return { success: true };
  }
}
