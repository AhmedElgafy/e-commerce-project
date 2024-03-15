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
    updateCountOfCartById: (
      state,
      action: PayloadAction<{ id: string; count2: number }>
    ) => {
      const newOne = state.value.filter((ele) => {
        if (ele._id == action.payload.id) {
          ele.count = action.payload.count2;
        }
        return ele;
      });
      state.value = newOne;
      // return(...state,)
    },
  },
});
export const { addToTheCart, removeFromCartById, updateCountOfCartById } =
  productSlice.actions;
export default productSlice.reducer;
