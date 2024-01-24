// store/reducers/counterSlice.ts

import { ProductType } from "@/app/typs/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartProduct {
  count: number | null;
  _id: string;
  name: string | null;
  price: string | null;
}

interface ProductState {
  value: CartProduct[];
}

const initialState: ProductState = {
  value: [],
};

const productSlice = createSlice({
  name: "Product Card",
  initialState,
  reducers: {
    addToTheCart: (state, action: PayloadAction<CartProduct>) => {
      state.value.push(action.payload);
    },
    removeFromCartById: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((ele) => ele._id != action.payload);
    },
  },
});
export const { addToTheCart, removeFromCartById } = productSlice.actions;
export default productSlice.reducer;
