import React from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router";

function HorYtCard({ videoDetails, isSearchCard }) {
  return (
    <figure className="relative">
      <Link to={`/videos/${videoDetails.id}`} className="flex gap-3">
        <img src={videoDetails.thumbnail} alt="" className="w-2/5 rounded-lg" />
        <div className="pt-2">
          <h3
            className="text-sm pr-5 font-semibold line-clamp-2"
            title={videoDetails.title}
          >
            {videoDetails.title}
          </h3>
          {isSearchCard && (
            <p className="text-xs mt-2 mb-3">
              {videoDetails.views} views {videoDetails.uploadedTime}
            </p>
          )}
          <figcaption className="flex gap-2 items-center">
            {isSearchCard && (
              <img
                src={videoDetails.chanelLogo}
                alt=""
                className="rounded-full h-8 w-8"
              />
            )}

            <p className="text-xs py-1.5">{videoDetails.chanelName}</p>
          </figcaption>

          {!isSearchCard && (
            <p className="text-xs">
              {videoDetails.views} views {videoDetails.uploadedTime}
            </p>
          )}
          {isSearchCard && (
            <p className="text-sm mt-3">{videoDetails.description}</p>
          )}
        </div>
      </Link>
      <button className="absolute top-2 right-2">
        <BsThreeDotsVertical size={20} />
      </button>
    </figure>
  );
}

export default HorYtCard;
