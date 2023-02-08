import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export const wrapper = createWrapper(store);
export default store;
