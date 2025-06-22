import { configureStore } from "@reduxjs/toolkit";
// import { CounterSlice } from "../features/CounterSlice";
// export const store = configureStore({
//   reducer : {
//     counter : CounterSlice
//   },
// })



import counterReducer from "../features/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
