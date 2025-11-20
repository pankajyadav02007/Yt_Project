import React from "react";
import HorYtCard from "../components/HorYtCard";

function SearchResults() {
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
      description: "5 secrets that OLD MONEY doesn’t want you to know",
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
      description: "5 secrets that OLD MONEY doesn’t want you to know",
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
      description: "5 secrets that OLD MONEY doesn’t want you to know",
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
      description: "5 secrets that OLD MONEY doesn’t want you to know",
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
      description: "5 secrets that OLD MONEY doesn’t want you to know",
    },
  ];
  return (
    <section className="grid gap-2">
      {videos.map((video) => (
        <HorYtCard videoDetails={video} isSearchCard={true} key={video.id} />
      ))}
    </section>
  );
}

export default SearchResults;
