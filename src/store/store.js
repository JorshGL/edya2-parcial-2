import { configureStore } from "@reduxjs/toolkit";
import { photosSlice } from "./slices/posts/photosSlice";

export const store = configureStore({
  reducer: {
    photos: photosSlice.reducer,
  }
})