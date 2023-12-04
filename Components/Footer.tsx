'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import amazon from '/public/amazon.svg';
import dribble from '/public/drible.svg';
import hubspot from '/public/hubspot.svg';
import notion from '/public/notion.svg';
import netflix from '/public/netflix.svg';
import zoom from '/public/zoom.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer = () => {
  const carouselSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <footer className="mx-[90px] p-4">
      <Slider {...carouselSettings}>
        <div className="my-2">
          <Image src={amazon} alt="Amazon" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={dribble} alt="Dribble" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={hubspot} alt="HubSpot" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={notion} alt="Notion" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={netflix} alt="Netflix" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={zoom} alt="Zoom" width={125} height={50} />
        </div>
      </Slider>
    </footer>
  );
};

export default Footer;
