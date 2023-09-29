export function mergeCarts(cart1: cartType, cart2: cartType): cartType {
  const mergedCart: cartType = { ...cart1 };

  for (const key in cart2) {
    if (!mergedCart[key]) {
      // Case 1: Pair exists in cart2 but not in cart1
      mergedCart[key] = cart2[key];
    } else {
      const mergedSizes = [...mergedCart[key].sizes, ...cart2[key].sizes];
      const totalSizes = mergedSizes.length;

      if (totalSizes <= cart2[key].details.stock) {
        // Case 2: Sizes fit within stock limit
        mergedCart[key].sizes = mergedSizes;
      } else {
        // Case 3: Sizes exceed stock limit
        mergedCart[key].sizes = mergedSizes.slice(0, cart2[key].details.stock);
      }
    }
  }

  return mergedCart;
}
