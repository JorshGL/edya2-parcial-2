import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbumById } from "../../store/slices/posts/photosThunks";
import {
  BiPhotoAlbum
} from 'react-icons/bi'
import PhotoGrid from "../../components/PhotoGrid";

const Albums = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const { album } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(getAlbumById(albumId));
  }, [albumId]);

  return (
    <div className="p-10">
      <div className="flex items-center justify-start gap-5">
        <div>
          <BiPhotoAlbum className="text-5xl text-emerald-500" />
        </div>
        <div className="text-3xl text-emerald-500 font-title font-black">{album?.title}</div>
      </div>

      <PhotoGrid />
      
    </div>
  );
};

export default Albums;
