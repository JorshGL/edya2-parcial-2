import { createSlice } from "@reduxjs/toolkit";

export const photosSlice = createSlice({
  name: "posts",
  initialState: {
    photos: [],
    loading: false,
    album: null,
  },
  reducers: {
    setPhotos: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    setAlbum: (state, action) => {
      state.album = action.payload;
    }
  },
});

export const { setPhotos, startLoading, setAlbum } = photosSlice.actions;