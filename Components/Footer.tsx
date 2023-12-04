import React from "react";
import Image from "next/image";
import amazon from "@/public/amazon.svg";
import dribble from "@/public/drible.svg";
import hubspot from "@/public/hubspot.svg";
import notion from "@/public/notion.svg";
import netflix from "@/public/netflix.svg";
import zoom from "@/public/zoom.svg";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center gap-9 justify-center p-4">
        
      <Image
        src={amazon}
        alt="Amazon"
        className="mx-2 my-2"
        width={125}
        height={50}
      />
      <Image
        src={dribble}
        alt="Dribble"
        className="mx-2 my-2"
        width={125}
        height={50}
      />
      <Image
        src={hubspot}
        alt="HubSpot"
        className="mx-2 my-2"
        width={125}
        height={50}
      />
      <Image
        src={notion}
        alt="Notion"
        className="mx-2 my-2"
        width={125}
        height={50}
      />
      <Image
        src={netflix}
        alt="Netflix"
        className="mx-2 my-2"
        width={125}
        height={50}
      />
      <Image
        src={zoom}
        alt="Zoom"
        className="mx-2 my-2"
        width={125}
        height={50}
      />
    </footer>
  );
};

export default Footer;
