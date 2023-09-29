import { store } from "@/rtk/store";
import { updateCart } from "./cartSlice";
import UpdateCartInFirestore from "@/firebase/updateCartInFirestore";

export default function DeleteCartProduct(key: string, userId: string) {
  const { cart: originalCart } = store.getState();
  const cart = { ...originalCart };

  delete cart[key];
  store.dispatch(updateCart(cart));
  UpdateCartInFirestore(cart, userId);
}
