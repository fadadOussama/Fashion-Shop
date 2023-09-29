import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: cartType = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<cartType>) => {
      return (state = action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { updateCart } = cartSlice.actions;
