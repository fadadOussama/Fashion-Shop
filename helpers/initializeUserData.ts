import { db } from "@/firebase/setup";
import { updateCart } from "@/rtk/slices/cartSlice";
import { store } from "@/rtk/store";
import { doc, getDoc } from "firebase/firestore";

export default async function initializeUserData(id: string) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    store.dispatch(updateCart(docSnap.data()));
  }
}
