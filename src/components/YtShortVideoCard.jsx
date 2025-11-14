import React from "react";

const YtShortVideoCard = (props) => {
  return (
    <figure>
      <img
        src={props.videoDetails.thumbnail}
        alt=""
        className="aspect-9/16 object-cover rounded-lg"
      />
      <figcaption>
        <h3 className="text--sm font-semibold line-clamp-2">
          {props.videoDetails.title}
        </h3>
      </figcaption>
    </figure>
  );
};

export default YtShortVideoCard;
