import React from "react";
import PhotoTitleBar from "./PhotoTitleBar";
import {
  BiPhotoAlbum,
  BiUserCircle
} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const PhotoItem = ({ photo }) => {
 
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md group shadow-emerald-900 shadow-xl">
      <img src={photo.url} alt={photo.title} className="object-cover" />
      <PhotoTitleBar photo={photo} />

      <div className="flex items-center justify-around group-hover:opacity-25 opacity-0 absolute w-full h-5/6 top-0 left-0 bg-cyan-100 font-body ease-in-out duration-500">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate(`/albums/${photo.albumId}`)}>
          <BiPhotoAlbum className="text-9xl" />
          Ver álbum
        </div>

        {/* <div className="flex flex-col items-center">
          <BiUserCircle className="text-9xl" />
          Ver usuario
        </div> */}
      </div>
    </div>
  );
};

export default PhotoItem;
