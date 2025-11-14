import React from "react";
import YtShortVideoCard from "../components/YtShortVideoCard";
import YtCard from "../components/YtCard";

function HomePage() {
  const videos = [
    {
      id: "Ge0MSjDG_g4",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      channelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "4.3k",
      uploadedTime: "20 hours ago",
      channelName: "Radhika Chopra",
    },
    {
      id: "bQNT4L9uGaU",
      thumbnail:
        "https://i.ytimg.com/vi/XRzRGNPaGt8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVXklirC8nEHYxLcmAUppieY6nng",
      channelLogo:
        "https://yt3.ggpht.com/AclQ892JKT07_-02ZRSJQIKWtG7deb9eyMmd8_sQNyb-zGcG7gxthnzOIepf7jnTLhreWAdm=s68-c-k-c0x00ffffff-no-rj",
      title:
        "I Open-Sourced My Failed Chrome Extension… But Did Not Expect This",
      views: "39K",
      uploadedTime: "3 days ago",
      channelName: "Anna Codes",
    },
    {
      id: "_CWcBWSKItk",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      channelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know",
      views: "3.3K",
      uploadedTime: "20 hours ago",
      channelName: "study plan",
    },
    {
      id: "6xk1g20qdVw",
      thumbnail:
        "https://i.ytimg.com/vi/XRzRGNPaGt8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVXklirC8nEHYxLcmAUppieY6nng",
      channelLogo:
        "https://yt3.ggpht.com/AclQ892JKT07_-02ZRSJQIKWtG7deb9eyMmd8_sQNyb-zGcG7gxthnzOIepf7jnTLhreWAdm=s68-c-k-c0x00ffffff-no-rj",
      title:
        "I Open-Sourced My Failed Chrome Extension… But Did Not Expect This",
      views: "40K",
      uploadedTime: "18 hours ago",
      channelName: "Himanshu Bloger",
    },
    {
      id: "C7RBGKwEWhc",
      thumbnail:
        "https://i.ytimg.com/vi/k-ZHBv1Db6M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAc2daDONLR0tpSWO41AgpGDzmZMg",
      channelLogo:
        "https://yt3.ggpht.com/jGUHpFjmumhIa2ZFuB-f2TrDrvoxj_R_eucLTjg4Eqj-wa4KCU1vEsUEmTgJe-Nd-iduVwHgXMI=s68-c-k-c0x00ffffff-no-rj",
      title: "5 secrets that OLD MONEY doesn’t want you to know5K",
      views: "",
      uploadedTime: "5 hours ago",
      channelName: "Tech",
    },
  ];

  const tabs = [
    "All",
    "Sports",
    "Gaming",
    "Songs",
    "Live",
    "Dance",
    "Videos",
    "movie",
    "Comedy",
    "Eduction",
    "News",
    "Life Style",
    "Wedding",
    "Vlog",
    "System Design",
    "Programming",
    "Computer",
  ];

  return (
    <>
      <section className="flex overflow-hidden gap-1.5 px-3 py-3 fixed w-full bg-neutral-950">
        {tabs.map((tab) => (
          <button className="text-sm  bg-neutral-700 px-3 py-1 rounded-md text-nowrap">
            {tab}
          </button>
        ))}
      </section>
      <section className="p-3 mt-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
          {videos.map((video) => (
            <YtCard videoDetails={video} />
          ))}
        </div>
        <section className="border-t border-t-nautral-100/10 pb-3">
          <h3 className="text-lg font-semibold my-3">Shorts</h3>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
            {videos.map((video) => (
              <YtShortVideoCard videoDetails={video} />
            ))}
          </section>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 border-t border-t-neutral-100/10">
          {videos.map((video) => (
            <YtCard videoDetails={video} />
          ))}
        </div>
      </section>
      ;
    </>
  );
}

export default HomePage;
