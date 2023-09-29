import { doc, setDoc } from "firebase/firestore";
import { db } from "./setup";

export default async function UpdateCartInFirestore(cart: cartType, userId: string) {
  await setDoc(doc(db, "users", userId), cart);
}
