import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPhotos, startLoading, setAlbum } from "./photosSlice";

export const getPhotos = createAsyncThunk(
  'posts/getPosts',
  async (_, { dispatch }) => {
    dispatch(startLoading());
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
    dispatch(setPhotos(data))
  }
);


export const getAlbumById = createAsyncThunk(
  'posts/getPhotosByAlbumId',
  async (albumId, { dispatch }) => {
    dispatch(startLoading());
    const { data: album } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
    const { data: photos } = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    dispatch(setAlbum(album));
    dispatch(setPhotos(photos));
  }
);