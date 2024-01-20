import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleMenoState {
  value: boolean;
}

const initialState: ToggleMenoState = {
  value: false,
};

const toggleMenoSlice = createSlice({
  name: "toggleMeno",
  initialState,
  reducers: {
    setToggleMeno: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setToggleMeno } = toggleMenoSlice.actions;
export default toggleMenoSlice.reducer;
