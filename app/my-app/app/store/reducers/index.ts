// store/reducers/index.ts

import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import categorySlice from "./category";

const rootReducer = combineReducers({
  counter: counterReducer,
  category: categorySlice,
  // Add other reducers as needed
});

export default rootReducer;
