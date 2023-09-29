import { db } from "@/firebase/setup";
import UpdateCartInFirestore from "@/firebase/updateCartInFirestore";
import { store } from "@/rtk/store";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { mergeCarts } from "./mergeCarts";
import { updateCart } from "@/rtk/slices/cartSlice";
import { isObjectEmpty } from "./isObjectEmpty";

export default async function initializeUserDataMerge(userId: string, uid: string) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  const { cart } = store.getState();

  if (!docSnap.exists() || isObjectEmpty(docSnap.data())) {
    await UpdateCartInFirestore(cart, userId);
    await deleteDoc(doc(db, "users", uid));
    localStorage.removeItem("uid");
  } else if (docSnap.exists()) {
    const mergedCart = mergeCarts(docSnap.data(), cart);
    await UpdateCartInFirestore(mergedCart, userId);
    await deleteDoc(doc(db, "users", uid));
    localStorage.removeItem("uid");
    store.dispatch(updateCart(mergedCart));
  }
}
