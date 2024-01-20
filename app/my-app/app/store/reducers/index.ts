// store/reducers/index.ts

import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import categorySlice from "./category";
import searchSlice from "./search";
import togglemeno from "./togglemeno";

const rootReducer = combineReducers({
  counter: counterReducer,
  category: categorySlice,
  search: searchSlice,
  toggleMeno: togglemeno,
  // Add other reducers as needed
});

export default rootReducer;
