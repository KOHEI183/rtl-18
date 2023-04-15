import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// customCounterSlice.reducerをimport
import customCounterReducer from "../features/customCounter/customCounterSlice";

// reduxを使用できるようにつなぎこむ
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: customCounterReducer, // sliceファイルのnameと一致させる
  },
});
