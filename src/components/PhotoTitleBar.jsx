import React, { useState } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";

const PhotoTitleBar = ({ photo }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  return (
    <div className="flex absolute bg-cyan-100 bg-opacity-25 bottom-0 justify-start w-full h-1/6 items-center font-body px-5">
      <span className="text-sm">{photo.title}</span>

      <div className="text-lg flex gap-3 ml-auto">
        <span
          onClick={() => {
            setLike(!like);
            setDislike(false);
          }}
        >
          {like ? <AiFillLike /> : <AiOutlineLike />}
        </span>

        <span
          onClick={() => {
            setDislike(!dislike);
            setLike(false);
          }}
        >
          {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
        </span>
      </div>
    </div>
  );
};

export default PhotoTitleBar;
