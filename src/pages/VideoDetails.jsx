import React from "react";
import { useParams } from "react-router";
import HorYtCard from "../components/HorYtCard";

function VideoDetails() {
  const { vid } = useParams();

  const videos = [
    {
      id: "Ge0MSjDG_g4",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      chanelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3K",
      uploadedTime: "20 hours ago",
      chanelName: "Radhika Chopra",
    },
    {
      id: "bQNT4L9uGaU",
      thumbnail:
        "https://i.ytimg.com/vi/XRzRGNPaGt8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVXklirC8nEHYxLcmAUppieY6nng",
      chanelLogo:
        "https://yt3.ggpht.com/AclQ892JKT07_-02ZRSJQIKWtG7deb9eyMmd8_sQNyb-zGcG7gxthnzOIepf7jnTLhreWAdm=s68-c-k-c0x00ffffff-no-rj",
      title:
        "I Open-Sourced My Failed Chrome Extension… But Did Not Expect This",
      views: "39K",
      uploadedTime: "3 days ago",
      chanelName: "Anna Codes",
    },
    {
      id: "_CWcBWSKItk",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      chanelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3K",
      uploadedTime: "20 hours ago",
      chanelName: "Radhika Chopra",
    },
    {
      id: "6xk1g20qdVw",
      thumbnail:
        "https://i.ytimg.com/vi/XRzRGNPaGt8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVXklirC8nEHYxLcmAUppieY6nng",
      chanelLogo:
        "https://yt3.ggpht.com/AclQ892JKT07_-02ZRSJQIKWtG7deb9eyMmd8_sQNyb-zGcG7gxthnzOIepf7jnTLhreWAdm=s68-c-k-c0x00ffffff-no-rj",
      title:
        "I Open-Sourced My Failed Chrome Extension… But Did Not Expect This",
      views: "39K",
      uploadedTime: "3 days ago",
      chanelName: "Anna Codes",
    },
    {
      id: "C7RBGKwEWhc",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      chanelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3K",
      uploadedTime: "20 hours ago",
      chanelName: "Radhika Chopra",
    },
  ];

  return (
    <section className="flex gap-3 pt-5 pr-5">
      <div className="w-[60%]">
        <iframe
          className="w-full h-auto aspect-video"
          src={`https://www.youtube.com/embed/${vid}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
        <h1>{vid}</h1>
      </div>
      <div className="w-[40%] grid gap-2">
        {videos.map((video) => (
          <HorYtCard videoDetails={video} key={video.id} />
        ))}
      </div>
    </section>
  );
}

export default VideoDetails;
