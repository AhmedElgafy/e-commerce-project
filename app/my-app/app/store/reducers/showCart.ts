import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowCartState {
  value: boolean;
}

const initialState: ShowCartState = {
  value: false,
};

const showCartSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setShowCart } = showCartSlice.actions;
export default showCartSlice.reducer;
