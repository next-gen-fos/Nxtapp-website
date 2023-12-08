'use client';

import React from 'react';
import Slider from 'react-slick';
import stellar from '/public/stellar.svg';
import Image from 'next/image';
import amazon from '/public/amazon.svg';
import dribble from '/public/drible.svg';
import CircleLogo from '/public/Circle_Logo.svg';
import notion from '/public/notion.svg';
import netflix from '/public/netflix.svg';
import linkio from '/public/linkio.svg';

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
      <p className="text-2xl items-center font-bold mb-4"> Backers and Partners</p>
      <Slider {...carouselSettings}>
        <div className="my-2">
          <Image src={amazon} alt="Amazon" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={dribble} alt="Dribble" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={CircleLogo} alt="CircleLogo" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={notion} alt="Notion" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={netflix} alt="Netflix" width={125} height={50} />
        </div>
        <div className="my-2">
          <Image src={stellar} alt="stellar" width={105} height={35} />
        </div>
        <div className="my-2">
          <Image src={linkio} alt="linkio" width={105} height={35} />
        </div>
      </Slider>
    </footer>
  );
};

export default Footer;
