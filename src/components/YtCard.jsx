function YtCard(props) {
  console.log(props);

  return (
    <figure>
      <img
        src="https://i.ytimg.com/vi/F2aJfxROY9Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLChHK9OFzi1Gj5qhEPMzHWBThFGbg"
        alt=""
        className="w-full rounded-2xl"
      />
      <figcaption className="flex gap-1 mt-2">
        <img
          src="https://yt3.ggpht.com/ax2e39eoHTJABdcUjDN-yzmXuBZDGbMJ-00C9k7e7UdCDwxiCsu610T9TjpvREjujRPCb7ib9c8=s68-c-k-c0x00ffffff-no-rj"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="text-md font-medium">
            Let's build an AI Automation SaaS with Next JS | Neon | Inngest |
            Better Auth | Cryptomus (Part 1/2)
          </h3>
          <p className="text-sm">
            {props.fName} {props.lName}
          </p>
          <p className="text-sm">2.8K views &bull; 12 hours ago</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default YtCard;
